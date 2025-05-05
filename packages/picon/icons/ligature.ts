import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconLigatureIcon],svg[picon-ligature-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 8V7h3v1M0 4V3h6v4H5V4M1 7V2C1-.5 6-.5 6 2H5C5 .5 2 .5 2 2v5m5 0v1H4V7"></svg:path>`,
})
export class PiconLigatureIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
