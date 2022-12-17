import PendingActionsIcon from '@mui/icons-material/PendingActions'
import ViewListIcon from '@mui/icons-material/ViewList'
import { AppBar, Box, Stack, Toolbar, Typography } from '@mui/material'
import { pipe } from 'fp-ts/lib/function'
import { concat, equals, when, __ } from 'ramda'

interface NavbarProps {
  scheduleName: string
}

const Navbar = ({ scheduleName }: NavbarProps) => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position='static' color='transparent' elevation={0}>
      <Toolbar>
        <Stack direction='row' alignItems='center' columnGap={1.5}>
          <PendingActionsIcon />
          <Typography component='div' variant='h6' sx={{ flexGrow: 1 }}>
            Scheduler
          </Typography>
        </Stack>
        <Stack
          direction='row'
          alignItems='center'
          columnGap={1.5}
          sx={{ mx: 'auto' }}
        >
          <ViewListIcon />
          <Typography fontStyle='italic'>
            {pipe(scheduleName, when(equals('unsaved'), concat(__, '*')))}
          </Typography>
        </Stack>
      </Toolbar>
    </AppBar>
  </Box>
)

export default Navbar
