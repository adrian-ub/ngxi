import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiHoneyPotIcon],svg[openmoji-honey-pot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#f4aa41" d="M55 17v-6H17v6m28 43c8.284 0 15-6.716 15-15V22a5 5 0 0 0-5-5H17a5 5 0 0 0-5 5v23c0 8.284 6.716 15 15 15z"></svg:path><svg:path fill="#fcea2b" d="M35 17v14a5 5 0 0 0 10 0v11a3 3 0 0 0 6 0V23a3 3 0 1 0 6 0v-5.578A5 5 0 0 0 55 17zh-2v-6h22v6"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path d="M55 17v-6H17v6m34 25a3 3 0 0 1-6 0m6-19a3 3 0 1 0 6 0v-5M45 31a5 5 0 1 1-10 0m10 11V31m6 11V23m-16 8V17m-2 0v-6"></svg:path><svg:path d="M45 60c8.284 0 15-6.716 15-15V22a5 5 0 0 0-5-5H17a5 5 0 0 0-5 5v23c0 8.284 6.716 15 15 15z"></svg:path></svg:g>`,
})
export class OpenmojiHoneyPotIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
