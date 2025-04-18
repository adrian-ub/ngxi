import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosModxIconIcon],svg[logos-modx-icon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#00B5DE" d="M256.002 25.523H127.614l-17.788 27.843l92.81 57.233z"></svg:path><svg:path fill="#00DECC" d="M109.826 53.366L23.976 0v128.388l30.163 17.015l148.497-34.804z"></svg:path><svg:path fill="#FF5529" d="m230.48 136.896l-27.844-17.016l-57.233 92.037l85.077 53.366z"></svg:path><svg:path fill="#FF9640" d="m202.636 119.88l-149.27 35.578L0 238.987h128.388l17.015-27.07z"></svg:path>`,
})
export class LogosModxIconIcon {
  readonly viewBox = input("0 0 256 266")
  readonly width = input("0.97em")
  readonly height = input("1em")
}
