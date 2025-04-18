import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiStore24HourIcon],svg[mdi-store-24-hour-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 12h-1v-2h-2V7h1v2h1V7h1m-5 3H9v1h2v1H8V9h2V8H8V7h3m8 0V4H5v3H2v13h8v-4h4v4h8V7z"></svg:path>`,
})
export class MdiStore24HourIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
