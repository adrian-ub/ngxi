import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerWindsockFilledIcon],svg[tabler-windsock-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2a1 1 0 0 1 1 1v1.079l11.083.924A1 1 0 0 1 19 6v4a1 1 0 0 1-.917.997L7 11.92V20h1a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2h1V3a1 1 0 0 1 1-1m1 4.086v3.827l3-.25V6.336zm7 .584v2.659l3-.25V6.92z"></svg:path>`,
})
export class TablerWindsockFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
