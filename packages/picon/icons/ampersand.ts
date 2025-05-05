import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconAmpersandIcon],svg[picon-ampersand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 1H1v2h6v1H1v2h4V2h1v4h1v1H2V0h3"></svg:path>`,
})
export class PiconAmpersandIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
