import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkConsumeIcon],svg[icon-park-consume-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M4 14C4 12.8954 4.89543 12 6 12H42C43.1046 12 44 12.8954 44 14V40C44 41.1046 43.1046 42 42 42H6C4.89543 42 4 41.1046 4 40V14Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M19 19L24 24L29 19"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M18 25H30"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M18 31H30"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 25V35"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M8 6H40"></svg:path></svg:g>`,
})
export class IconParkConsumeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
