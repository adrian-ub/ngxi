import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignLogoFacebookFilledIcon],svg[tdesign-logo-facebook-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 6a6 6 0 0 1 6-6H19v6h-3a1.5 1.5 0 0 0-1.5 1.5V9h4.78l-1.5 6H14.5v9h-6v-9H4.25V9H8.5z"></svg:path>`,
})
export class TdesignLogoFacebookFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
