import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

function DocPdf () {

    return (
        <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
          <Stack direction="row" spacing={2}>     
              <iframe
                title="PDF"
                src="http://www.pdf995.com/samples/pdf.pdf"
                width="70%"
                height="700px"
              >
              </iframe>
              <TextField
                id="filled-textarea"
                label="Notes"
                placeholder="Content"
                multiline
                minRows={30}  
                variant="filled"
                sx={{width: 500}}
              />
          </Stack>
        </Container>
    );
  };
  export default DocPdf;