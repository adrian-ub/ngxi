import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMilitaryMedalIcon],svg[emojione-military-medal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ffc200" d="M33.9 31.8c0 1.1-.9 1.9-1.9 1.9s-1.9-.9-1.9-1.9h-.9c0 1.6 1.3 2.8 2.8 2.8s2.8-1.3 2.8-2.8z"></svg:path><svg:g fill="#e68a00"><svg:path d="M33 37.3h-2v-4c0-1.6 2-1.6 2 0z"></svg:path><svg:circle cx="32" cy="48.5" r="13.5"></svg:circle></svg:g><svg:circle cx="32" cy="48.5" r="12.5" fill="#ffc200"></svg:circle><svg:path fill="#e68a00" d="m30.3 46.2l-1.8-2.4l-7.8 1.2l5.7 1.8zm3.4 0l1.8-2.4l-3.5-7v5.9zm1.1 3.3l2.8 1l5.7-5.5l-5.7 1.8zM32 51.6v2.9l7 3.7l-3.5-4.8zm-2.8-2.1l-2.8 1l-1.4 7.7l3.5-4.8z"></svg:path><svg:path fill="#ffe394" d="M32 42.7v-5.9l-3.5 7l1.8 2.4zm5.6 4.1l5.7-1.8l-7.8-1.2l-1.8 2.4zm-2.8 2.7l.7 3.9l3.5 4.8l-1.4-7.7zm-6.3 3.9L25 58.2l7-3.7v-2.9zm-2.1-6.6L20.7 45l5.7 5.5l2.8-1z"></svg:path><svg:path fill="#f3f7fa" d="m22 28.2l2.3 3.8H27V2h-5zM37 2v30h2.7l2.3-3.8V2z"></svg:path><svg:path fill="#42ade2" d="m17 20l5 8.2V2h-5zM27 2h10v30H27zm15 0v26.2l5-8.2V2z"></svg:path><svg:path fill="#d3976e" d="M23 30.1h18v1H23z"></svg:path><svg:path fill="#89664c" d="M23 31.1h18v1H23z"></svg:path>`,
})
export class EmojioneMilitaryMedalIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
