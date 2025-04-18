import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faYahooIcon],svg[fa-yahoo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m763 957l13 707q-62-11-105-11q-41 0-105 11l13-707q-40-69-168.5-295.5T194 287T13 0q58 15 108 15q44 0 111-15q63 111 133.5 229.5t167 276.5T671 733q37-61 109.5-177.5t117.5-190t105-176T1110 0q54 14 107 14q56 0 114-14q-28 39-60 88.5t-49.5 78.5t-56.5 96t-49 84Q970 595 763 957"></svg:path>`,
})
export class FaYahooIcon {
  readonly viewBox = input("0 0 1344 1664")
  readonly width = input("0.81em")
  readonly height = input("1em")
}
