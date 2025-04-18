import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBedIcon],svg[bx-bed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 9.557V3h-2v2H6V3H4v6.557C2.81 10.25 2 11.525 2 13v4a1 1 0 0 0 1 1h1v4h2v-4h12v4h2v-4h1a1 1 0 0 0 1-1v-4c0-1.475-.811-2.75-2-3.443M18 7v2h-5V7zM6 7h5v2H6zm14 9H4v-3c0-1.103.897-2 2-2h12c1.103 0 2 .897 2 2z"></svg:path>`,
})
export class BxBedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
