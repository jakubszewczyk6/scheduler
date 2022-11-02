import { GridRowId } from '@mui/x-data-grid'

type Day = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday'

interface Row {
  id: GridRowId
  day?: Day
  starts?: string
  ends?: string
  room?: string
  subject?: string
  notification?: boolean
}

export type { Day, Row }