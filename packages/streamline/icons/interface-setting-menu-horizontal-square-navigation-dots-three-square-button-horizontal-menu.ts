import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceSettingMenuHorizontalSquareNavigationDotsThreeSquareButtonHorizontalMenuIcon],svg[streamline-interface-setting-menu-horizontal-square-navigation-dots-three-square-button-horizontal-menu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="13" x=".5" y=".5" rx="1"></svg:rect><svg:circle cx="7" cy="7" r=".5"></svg:circle><svg:circle cx="4" cy="7" r=".5"></svg:circle><svg:circle cx="10" cy="7" r=".5"></svg:circle></svg:g>`,
})
export class StreamlineInterfaceSettingMenuHorizontalSquareNavigationDotsThreeSquareButtonHorizontalMenuIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
