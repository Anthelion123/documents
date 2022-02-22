import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

function DocPdf () {

    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8} lg={9}>
              <TextField
                id="filled-textarea"
                label="Notes"
                placeholder="Content"
                multiline
                minRows={22}
                fullWidth
                variant="filled"
              />
            </Grid>
          </Grid>
        </Container>
    );
  };
  export default DocPdf;