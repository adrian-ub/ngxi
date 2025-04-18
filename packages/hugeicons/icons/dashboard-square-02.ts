import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDashboardSquare02Icon],svg[hugeicons-dashboard-square-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 6c0-1.886 0-2.828.586-3.414S4.114 2 6 2s2.828 0 3.414.586S10 4.114 10 6v2c0 1.886 0 2.828-.586 3.414S7.886 12 6 12s-2.828 0-3.414-.586S2 9.886 2 8zm0 13c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C3.602 16 4.068 16 5 16h2c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C10 17.602 10 18.068 10 19s0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C8.398 22 7.932 22 7 22H5c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C2 20.398 2 19.932 2 19m12-3c0-1.886 0-2.828.586-3.414S16.114 12 18 12s2.828 0 3.414.586S22 14.114 22 16v2c0 1.886 0 2.828-.586 3.414S19.886 22 18 22s-2.828 0-3.414-.586S14 19.886 14 18zm0-11c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C15.602 2 16.068 2 17 2h2c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C22 3.602 22 4.068 22 5s0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C20.398 8 19.932 8 19 8h-2c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C14 6.398 14 5.932 14 5" color="currentColor"></svg:path>`,
})
export class HugeiconsDashboardSquare02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
