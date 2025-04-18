import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonDataBackupIcon],svg[carbon-data-backup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="7" cy="7" r="1" fill="currentColor"></svg:circle><svg:circle cx="7" cy="15" r="1" fill="currentColor"></svg:circle><svg:circle cx="7" cy="23" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M12 26H4v-6h8v-2H4v-6h18V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h8ZM4 4h16v6H4Z"></svg:path><svg:path fill="currentColor" d="M28 17v2.413A6.996 6.996 0 1 0 22 30v-2a5 5 0 1 1 4.576-7H24v2h6v-6Z"></svg:path>`,
})
export class CarbonDataBackupIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
