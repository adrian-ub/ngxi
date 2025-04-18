import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkBlockNineIcon],svg[icon-park-block-nine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M18 14H30V26H18V14Z"></svg:path><svg:path d="M18 26H30V38H18V26Z"></svg:path><svg:path d="M30 14H42V26H30V14Z"></svg:path><svg:path d="M6 26H18V38H6V26Z"></svg:path></svg:g>`,
})
export class IconParkBlockNineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
