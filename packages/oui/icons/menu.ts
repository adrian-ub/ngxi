import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiMenuIcon],svg[oui-menu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M0 2h16v2H0zm0 5h16v2H0zm16 5H0v2h16z"></svg:path>`,
})
export class OuiMenuIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
