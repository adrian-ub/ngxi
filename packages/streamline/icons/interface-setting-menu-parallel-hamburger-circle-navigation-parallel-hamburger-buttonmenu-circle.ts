import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceSettingMenuParallelHamburgerCircleNavigationParallelHamburgerButtonmenuCircleIcon],svg[streamline-interface-setting-menu-parallel-hamburger-circle-navigation-parallel-hamburger-buttonmenu-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="7" cy="7" r="6.5"></svg:circle><svg:path d="M4.5 4.5h5M4.5 7h5m-5 2.5h5"></svg:path></svg:g>`,
})
export class StreamlineInterfaceSettingMenuParallelHamburgerCircleNavigationParallelHamburgerButtonmenuCircleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
