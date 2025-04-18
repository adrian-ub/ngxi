import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsModulzLogoIcon],svg[radix-icons-modulz-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.26 3.167L4.37 5.333V1zM1 8.222l2.889-2.166L1 3.889zM1 14l2.889-2.167L1 9.667zm6.74-5.778l2.89-2.166l-2.89-2.167zM14 3.167l-2.889 2.166V1zm-2.889 7.944L14 8.944l-2.889-2.166zm-7.222 0L1 8.944l2.889-2.166zm.481-5.055l2.89 2.166V3.89zm-.481-.723L1 3.167L3.889 1zM7.74 3.167l2.889 2.166V1zM14 8.222l-2.889-2.166L14 3.889zm-2.889 3.611L14 14V9.667z" clip-rule="evenodd"></svg:path>`,
})
export class RadixIconsModulzLogoIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
