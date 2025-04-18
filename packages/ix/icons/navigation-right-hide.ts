import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixNavigationRightHideIcon],svg[ix-navigation-right-hide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M64 64v384h384V64zm42.667 42.667H320v298.666H106.667zm298.666 0h-42.666v42.666h42.666zm0 85.333h-42.666v42.819h42.666zm-42.666 170.667v42.666h42.666v-42.666zm0-85.181V320h42.666v-42.514zM208.915 166.248l-30.17 30.17l38.248 38.248l-88.993.153v42.667l88.994-.153l-38.249 38.249l30.17 30.17L298.667 256z" clip-rule="evenodd"></svg:path>`,
})
export class IxNavigationRightHideIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
