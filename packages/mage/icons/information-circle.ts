import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageInformationCircleIcon],svg[mage-information-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke-width="1.5" d="M12 21.5a9.5 9.5 0 1 0 0-19a9.5 9.5 0 0 0 0 19m.005-4.222v-6.333"></svg:path><svg:path stroke-width="2" d="M11.956 7.443h.01"></svg:path></svg:g>`,
})
export class MageInformationCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
