import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageDirectionUpRightIcon],svg[mage-direction-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m9.697 12.695l-5.271-.91a2.074 2.074 0 0 1-.167-3.941l14.045-4.968a2.075 2.075 0 0 1 2.66 2.66l-4.968 14.318a2.075 2.075 0 0 1-3.981-.205l-.91-5.546a2.08 2.08 0 0 0-1.408-1.408"></svg:path>`,
})
export class MageDirectionUpRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
