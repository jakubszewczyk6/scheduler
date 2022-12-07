import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import { IconButton, Stack, Typography } from '@mui/material'
import { GridRenderCellParams } from '@mui/x-data-grid'
import { Dispatch, SetStateAction } from 'react'
import addRow from './functions/addRow'
import removeRow from './functions/removeRow'
import { Row } from './types/Table.types'

interface DayCellProps extends GridRenderCellParams {
  rows: Row[]
  setRows: Dispatch<SetStateAction<Row[]>>
}

const DayCell = ({ id, value, rows, setRows }: DayCellProps) => (
  <Stack
    direction='row'
    justifyContent='space-between'
    alignItems='center'
    width='100%'
  >
    <Typography>{value}</Typography>
    {id === value ? (
      <IconButton size='small' onClick={() => setRows(addRow(id, rows))}>
        <AddIcon fontSize='small' />
      </IconButton>
    ) : (
      <IconButton size='small' onClick={() => setRows(removeRow(id, rows))}>
        <RemoveIcon fontSize='small' />
      </IconButton>
    )}
  </Stack>
)

export default DayCell
