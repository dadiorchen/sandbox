const axios = require("axios");
const log = require("loglevel");

/*
 * curl -X POST -H 'Content-Type: application/json' 'http://localhost:8983/solr/my_collection/update/json/docs' --data-binary '
{
  "id": "1",
  "title": "Doc 1"
}'
*/
describe("import", () => {
  it("import", async () => {
    try{
      const result = await axios.request({
        url: "http://localhost:8983/solr/demo/update/json/docs",
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          id: 405,
          name: "horse cat dog zhang dadior apple",
        },
      });
      log.warn("result import:", result);
    }catch(e){
      log.error("e when post:", e);
      throw e;
    }
    

  });
});


describe.skip("search", () => {

  it("search", async () => {
//    const result = await axios.get("http://baidu.com");
    const result = await axios.get("http://localhost:8983/solr/gettingstarted/select?q=foundation");

    log.warn("result:", result);
  });
});

describe("", () => {

  it.only("load test data", () => {
    const file = require("./testData/note-u-224e8f40-8eec-11e8-b592-ed316bcdccd5.20210623-000001.json");
    log.warn("docs number:", file.docs.length);
    const notes = file.docs.filter(d => d.type === "note");
    log.warn("note number:", notes.length);
    log.warn("sample of content:", notes.slice(0, 5).map(d => d.content.slice(0, 20)));
    log.warn("sample of notes:", notes.slice(0, 2));
    const contentLength = notes.map(note => note.content).reduce((a,c) => {
      return a + c.length;
    }, 0);
    log.warn("content length:", contentLength);

  });

});
