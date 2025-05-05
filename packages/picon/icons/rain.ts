import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconRainIcon],svg[picon-rain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 5C0 5-1 2 2 2c0-3 4-2 4-1c3 1 2 4 0 4M1 6h1v2H1m2-3h1v2H3m2-1h1v2H5"></svg:path>`,
})
export class PiconRainIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
