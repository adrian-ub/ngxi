import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDashboardSquare03Icon],svg[hugeicons-dashboard-square-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 5c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C17.602 2 18.068 2 19 2s1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C22 3.602 22 4.068 22 5v4c0 .932 0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C20.398 12 19.932 12 19 12s-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C16 10.398 16 9.932 16 9zm0 14c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C17.602 16 18.068 16 19 16s1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C22 17.602 22 18.068 22 19s0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C20.398 22 19.932 22 19 22s-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C16 20.398 16 19.932 16 19M2 16c0-1.886 0-2.828.586-3.414S4.114 12 6 12h2c1.886 0 2.828 0 3.414.586S12 14.114 12 16v2c0 1.886 0 2.828-.586 3.414S9.886 22 8 22H6c-1.886 0-2.828 0-3.414-.586S2 19.886 2 18zM2 5c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C3.602 2 4.068 2 5 2h4c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C12 3.602 12 4.068 12 5s0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C10.398 8 9.932 8 9 8H5c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C2 6.398 2 5.932 2 5" color="currentColor"></svg:path>`,
})
export class HugeiconsDashboardSquare03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
