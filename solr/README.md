The project to test Solr, couchdb dump data to Solr for full text search.

* solrdata the folder for Solr instance, index data
* couchdata the folder for couchdb, to mount in the docker container

---

# Log

Tue Oct 12 11:07:40 CST 2021 
docker run -d -p 5984:5984 -v /Users/deanchen/work/sandbox/solr/couchdb_data:/opt/couchdb/data --name couch couchdb:2
