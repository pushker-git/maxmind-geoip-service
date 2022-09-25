# Read database/readme.txt file to setup offline maxmind database - currently it is using GeoLite2 database

### difference between GeoLite2 vs GeoIP2 database
GeoLite2 databases are free IP geolocation databases comparable to, but less accurate than, MaxMind’s GeoIP2 databases. The GeoLite2 Country, City, and ASN databases are updated weekly, every Tuesday. GeoLite2 data is also available as a web service in the GeoLite2 Country and GeoLite2 City web services. Users of the GeoLite2 web services are limited to 1000 IP address lookups per service per day.

## API 

GET API /geoip/v1/city/{ip_address}

TODO - AUTO UPDATE the database on regular interval

https://dev.maxmind.com/geoip/updating-databases?lang=en