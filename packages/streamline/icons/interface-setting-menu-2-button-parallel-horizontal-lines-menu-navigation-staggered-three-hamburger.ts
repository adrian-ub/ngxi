import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceSettingMenu2ButtonParallelHorizontalLinesMenuNavigationStaggeredThreeHamburgerIcon],svg[streamline-interface-setting-menu-2-button-parallel-horizontal-lines-menu-navigation-staggered-three-hamburger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 2H6m5 5H3.5m5 5h-8"></svg:path>`,
})
export class StreamlineInterfaceSettingMenu2ButtonParallelHorizontalLinesMenuNavigationStaggeredThreeHamburgerIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
