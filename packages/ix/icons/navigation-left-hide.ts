import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixNavigationLeftHideIcon],svg[ix-navigation-left-hide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 64v384H64V64zm-42.667 42.667H192v298.666h213.333zm-298.666 0h42.666v42.666h-42.666zm0 85.333h42.666v42.819h-42.666zm42.666 170.667v42.666h-42.666v-42.666zm0-85.181V320h-42.666v-42.514zm153.752-111.238l30.17 30.17l-38.248 38.248l88.993.153v42.667l-88.994-.153l38.249 38.249l-30.17 30.17L213.333 256z" clip-rule="evenodd"></svg:path>`,
})
export class IxNavigationLeftHideIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
