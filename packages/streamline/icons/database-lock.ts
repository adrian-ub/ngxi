import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineDatabaseLockIcon],svg[streamline-database-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M6 4.74c3.038 0 5.5-.95 5.5-2.12S9.038.5 6 .5S.5 1.45.5 2.62S2.962 4.74 6 4.74m5.5-.24V2.62"></svg:path><svg:path d="M.5 2.62v6.76c0 1.12 2.24 2 5.08 2.11"></svg:path><svg:path d="M6 8.08C3 8.12.5 7.17.5 6M8 9.5h5c.3 0 .5.2.5.5v3c0 .3-.2.5-.5.5H8c-.3 0-.5-.2-.5-.5v-3c0-.3.2-.5.5-.5m.5 0v-1c0-1.1.9-2 2-2s2 .9 2 2v1"></svg:path></svg:g>`,
})
export class StreamlineDatabaseLockIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
