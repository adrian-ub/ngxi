import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[magePreviewCircleIcon],svg[mage-preview-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m16.219 17.114l-.51 2.959a1.164 1.164 0 0 1-2.213.093l-2.788-7.882A1.164 1.164 0 0 1 12.2 10.79l8.036 2.788a1.164 1.164 0 0 1-.116 2.234l-3.112.51a1.17 1.17 0 0 0-.79.791"></svg:path><svg:path d="M21.502 9.314A9.726 9.726 0 1 0 9.297 21.5"></svg:path></svg:g>`,
})
export class MagePreviewCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
