import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterPCircleSolidIcon],svg[mynaui-letter-p-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M13.25 11.25H10.5v-2.5h2.75a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-.75.75"></svg:path><svg:path d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m8-4.75C9.56 7.25 9 7.81 9 8.5V16a.75.75 0 0 0 1.5 0v-3.25h2.75a2.25 2.25 0 0 0 2.25-2.25v-1a2.25 2.25 0 0 0-2.25-2.25z"></svg:path></svg:g>`,
})
export class MynauiLetterPCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
