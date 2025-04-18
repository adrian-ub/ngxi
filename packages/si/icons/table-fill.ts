import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siTableFillIcon],svg[si-table-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 10v4h-4v-4z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3M10 8V4H8v4H4v2h4v4H4v2h4v4h2v-4h4v4h2v-4h4v-2h-4v-4h4V8h-4V4h-2v4z" clip-rule="evenodd"></svg:path>`,
})
export class SiTableFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
