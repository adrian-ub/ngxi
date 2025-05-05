import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconShrinkIcon],svg[picon-shrink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 3H5V0h1v2h2M2 8V6H0V5h3v3"></svg:path>`,
})
export class PiconShrinkIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
