import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phAsteriskSimpleThinIcon],svg[ph-asterisk-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m209.48 99.71l-75.06 30l52.74 67.8a4 4 0 0 1-.71 5.62a3.93 3.93 0 0 1-2.45.87a4 4 0 0 1-3.16-1.54L128 134.52l-52.84 67.94A4 4 0 0 1 72 204a4 4 0 0 1-2.45-.84a4 4 0 0 1-.71-5.62l52.74-67.8l-75.06-30a4 4 0 1 1 3-7.42L124 122.09V40a4 4 0 0 1 8 0v82.09l74.51-29.8a4 4 0 1 1 3 7.42Z"></svg:path>`,
})
export class PhAsteriskSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
