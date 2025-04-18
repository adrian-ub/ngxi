import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceSettingMenuParallelHamburgerSquareNavigationParallelHamburgerButtonmenuSquareIcon],svg[streamline-interface-setting-menu-parallel-hamburger-square-navigation-parallel-hamburger-buttonmenu-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="13" x=".5" y=".5" rx="1"></svg:rect><svg:path d="M4.5 4.5h5M4.5 7h5m-5 2.5h5"></svg:path></svg:g>`,
})
export class StreamlineInterfaceSettingMenuParallelHamburgerSquareNavigationParallelHamburgerButtonmenuSquareIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
