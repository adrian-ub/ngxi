import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riServerFillIcon],svg[ri-server-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3h16a1 1 0 0 1 1 1v7H3V4a1 1 0 0 1 1-1M3 13h18v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm4 3v2h3v-2zM7 6v2h3V6z"></svg:path>`,
})
export class RiServerFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
