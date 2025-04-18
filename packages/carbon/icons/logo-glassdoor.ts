import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonLogoGlassdoorIcon],svg[carbon-logo-glassdoor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.828 28h10.344a3.43 3.43 0 0 0 3.43-3.43V10.33h-3.43v14.24H7.398a3.43 3.43 0 0 0 3.43 3.43"></svg:path><svg:path fill="currentColor" d="M21.172 4H10.828a3.43 3.43 0 0 0-3.43 3.43v14.24h3.43V7.43h13.774A3.43 3.43 0 0 0 21.172 4"></svg:path>`,
})
export class CarbonLogoGlassdoorIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
