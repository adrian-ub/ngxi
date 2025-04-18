import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceSettingMenu1ButtonParallelHorizontalLinesMenuNavigationThreeHamburgerIcon],svg[streamline-interface-setting-menu-1-button-parallel-horizontal-lines-menu-navigation-three-hamburger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 2H.5m13 5H.5m13 5H.5"></svg:path>`,
})
export class StreamlineInterfaceSettingMenu1ButtonParallelHorizontalLinesMenuNavigationThreeHamburgerIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
