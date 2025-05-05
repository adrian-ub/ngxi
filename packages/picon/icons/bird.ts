import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconBirdIcon],svg[picon-bird-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2H5v1h1m1 0q1 3-3 3v2H3V6H0c5-2 3-7 8-4"></svg:path>`,
})
export class PiconBirdIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
