import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[foundationContrastIcon],svg[foundation-contrast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M50 12.5c-20.712 0-37.5 16.793-37.5 37.502S29.288 87.5 50 87.5s37.5-16.788 37.5-37.498S70.712 12.5 50 12.5m.124 9.943c15.141.067 27.436 12.405 27.436 27.559S65.265 77.49 50.124 77.557z"></svg:path>`,
})
export class FoundationContrastIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
