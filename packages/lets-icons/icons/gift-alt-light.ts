import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsGiftAltLightIcon],svg[lets-icons-gift-alt-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="17" height="3" x="3.5" y="9.5" fill="none" stroke="currentColor" stroke-linecap="round" rx="1.5"></svg:rect>`,
})
export class LetsIconsGiftAltLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
