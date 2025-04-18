import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceSettingMenuHorizontalCircleNavigationDotsThreeCircleButtonHorizontalMenuIcon],svg[streamline-interface-setting-menu-horizontal-circle-navigation-dots-three-circle-button-horizontal-menu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="7" cy="7" r="6.5"></svg:circle><svg:circle cx="7" cy="7" r=".5"></svg:circle><svg:circle cx="4" cy="7" r=".5"></svg:circle><svg:circle cx="10" cy="7" r=".5"></svg:circle></svg:g>`,
})
export class StreamlineInterfaceSettingMenuHorizontalCircleNavigationDotsThreeCircleButtonHorizontalMenuIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
