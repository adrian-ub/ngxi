import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiLargerTextIcon],svg[ooui-larger-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.66 18h-2a.85.85 0 0 1-.56-.17a1.1 1.1 0 0 1-.32-.43l-1.33-3.53h-6.9L5.22 17.4a1.06 1.06 0 0 1-.31.41a.83.83 0 0 1-.56.19h-2L8.68 2h2.63zm-4.92-6l-2.2-5.84A16 16 0 0 1 10 4.43q-.12.52-.27 1t-.27.77L7.26 12z"></svg:path>`,
})
export class OouiLargerTextIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
