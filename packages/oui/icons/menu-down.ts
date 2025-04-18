import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiMenuDownIcon],svg[oui-menu-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 7.5c0 .276-.216.5-.495.5h-2.01a.5.5 0 0 1-.487-.412L3 7.5c0-.276.216-.5.495-.5h2.01c.243 0 .445.183.487.412zM3.51 4a.51.51 0 0 1-.502-.412L3 3.5c0-.276.228-.5.51-.5h8.98c.25 0 .459.183.502.412L13 3.5c0 .276-.228.5-.51.5H8.493v7.792l2.06-2.06a.5.5 0 1 1 .707.707L9.14 12.56a1.5 1.5 0 0 1-1.114.44h-.033a.5.5 0 0 1-.118-.014a1.5 1.5 0 0 1-.857-.426l-2.122-2.12a.5.5 0 0 1 .708-.708l1.889 1.89V4zM13 7.5c0 .276-.216.5-.495.5h-2.01a.5.5 0 0 1-.487-.412L10 7.5c0-.276.216-.5.495-.5h2.01c.243 0 .445.183.487.412z"></svg:path>`,
})
export class OuiMenuDownIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
