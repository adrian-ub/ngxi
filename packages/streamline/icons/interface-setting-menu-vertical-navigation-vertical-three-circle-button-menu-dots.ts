import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceSettingMenuVerticalNavigationVerticalThreeCircleButtonMenuDotsIcon],svg[streamline-interface-setting-menu-vertical-navigation-vertical-three-circle-button-menu-dots-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="7" cy="2" r="1.5"></svg:circle><svg:circle cx="7" cy="7" r="1.5"></svg:circle><svg:circle cx="7" cy="12" r="1.5"></svg:circle></svg:g>`,
})
export class StreamlineInterfaceSettingMenuVerticalNavigationVerticalThreeCircleButtonMenuDotsIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
