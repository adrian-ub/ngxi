import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkBaggageDelayIcon],svg[icon-park-baggage-delay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M36 26V14C36 12.8954 35.1046 12 34 12H10C8.89543 12 8 12.8954 8 14V38C8 39.1046 8.89543 40 10 40H27"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M16 12V40"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M28 12V29"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M28 12V6C28 4.89543 27.1046 4 26 4H18C16.8954 4 16 4.89543 16 6V12"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M35 44C39.9706 44 44 39.9706 44 35C44 30.0294 39.9706 26 35 26C30.0294 26 26 30.0294 26 35C26 39.9706 30.0294 44 35 44Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M34 32V36H38"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M13 40V44"></svg:path></svg:g>`,
})
export class IconParkBaggageDelayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
