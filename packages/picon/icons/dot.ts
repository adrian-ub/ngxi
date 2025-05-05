import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconDotIcon],svg[picon-dot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5V4h1v1m1-4V0h1v1M2 3V2h1v1M0 8V0h1v7h7v1"></svg:path>`,
})
export class PiconDotIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
