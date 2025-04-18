import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonMobileIcon],svg[carbon-mobile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 4H10a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h12a2.003 2.003 0 0 0 2-2V6a2 2 0 0 0-2-2m0 2v2H10V6ZM10 28V10h12v18Z"></svg:path>`,
})
export class CarbonMobileIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
