import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityHostLineIcon],svg[clarity-host-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26.5 2h-17A1.5 1.5 0 0 0 8 3.5V34h20V3.5A1.5 1.5 0 0 0 26.5 2M26 32H10V4h16Z"></svg:path><svg:path fill="currentColor" d="M12 6.2h12v1.6H12zm0 4h12v1.6H12zm6 12.58a3 3 0 1 0 3 3a3 3 0 0 0-3-3m0 4.5a1.5 1.5 0 1 1 1.5-1.5a1.5 1.5 0 0 1-1.5 1.5"></svg:path>`,
})
export class ClarityHostLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
