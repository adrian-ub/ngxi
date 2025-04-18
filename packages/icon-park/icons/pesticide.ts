import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkPesticideIcon],svg[icon-park-pesticide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" fill-rule="evenodd" stroke="#000" stroke-linejoin="round" d="M15 11.3684V4H24H33V11.3684L39 17.4868V19.5263V27.6842V42C39 43.1046 38.1046 44 37 44H11C9.89543 44 9 43.1046 9 42V27.6842V19.5263V17.4868L15 11.3684Z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M9 23H17V35H9"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M15 11.5H33"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M31 23V29"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M31 34V35"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M9 38V20"></svg:path></svg:g>`,
})
export class IconParkPesticideIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
