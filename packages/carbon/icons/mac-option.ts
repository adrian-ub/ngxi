import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonMacOptionIcon],svg[carbon-mac-option-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 5h10v2H18zm-7.4 0H4v2h5.4l9 20H28v-2h-8.4z"></svg:path>`,
})
export class CarbonMacOptionIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
