import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[foundationMobileIcon],svg[foundation-mobile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M69.328 17.517H30.567v.01a2.495 2.495 0 0 0-2.396 2.49v59.967a2.495 2.495 0 0 0 2.396 2.489v.011h38.761a2.5 2.5 0 0 0 2.5-2.5V20.017a2.5 2.5 0 0 0-2.5-2.5M50.059 79.9a2.45 2.45 0 1 1 0-4.9a2.45 2.45 0 0 1 0 4.9m11.813-7.395H38.128V27.473h23.743v45.032z"></svg:path>`,
})
export class FoundationMobileIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
