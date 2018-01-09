# Node Express File Upload
A simple file uploader using express-fileupload.

## Routes
### POST /upload
- Handles a file upload form
- Example html:
```html
<html>
  <body>
    <form ref='uploadForm' 
      id='uploadForm' 
      action='http://localhost:7000/upload' 
      method='post' 
      encType="multipart/form-data">
        <input type="file" name="csvFile" />
        <input type='submit' value='Upload!' />
    </form>     
  </body>
</html>
```

## References
### Express File Upload
- https://www.npmjs.com/package/express-fileupload

### Serving static files in Express
- http://expressjs.com/en/starter/static-files.html