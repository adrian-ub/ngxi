import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonFeatureTypingIcon],svg[carbon-feature-typing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="17.5" cy="22.5" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="6.5" cy="22.5" r="1.5" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M13 28V18h7a1 1 0 0 0 .868-1.496l-8-14C12.676 2.168 12.338 2 12 2s-.676.168-.868.504l-8 14A1 1 0 0 0 4 18h7v10a2 2 0 0 0 2 2h15v-2zM5.723 16L12 5.016L18.277 16z"></svg:path>`,
})
export class CarbonFeatureTypingIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
