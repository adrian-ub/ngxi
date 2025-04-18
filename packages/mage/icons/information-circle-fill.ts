import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageInformationCircleFillIcon],svg[mage-information-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.75A10.25 10.25 0 1 0 22.25 12A10.26 10.26 0 0 0 12 1.75m0 4.69a1 1 0 1 1-.03 0zm1 10.83a1 1 0 1 1-2 0v-6.33a1 1 0 0 1 2 0z"></svg:path>`,
})
export class MageInformationCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
