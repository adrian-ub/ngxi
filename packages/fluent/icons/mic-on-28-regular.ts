import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMicOn28RegularIcon],svg[fluent-mic-on-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="M14 2a4.5 4.5 0 0 0-4.5 4.5v8a4.5 4.5 0 1 0 9 0v-8A4.5 4.5 0 0 0 14 2zm-3 4.5a3 3 0 1 1 6 0v8a3 3 0 1 1-6 0v-8z" fill="currentColor"></svg:path><svg:path d="M7.5 13.75a.75.75 0 1 0-1.5 0v.75a8 8 0 0 0 7.25 7.965v2.785a.75.75 0 0 0 1.5 0v-2.785A8 8 0 0 0 22 14.5v-.75a.75.75 0 1 0-1.5 0v.75a6.5 6.5 0 1 1-13 0v-.75z" fill="currentColor"></svg:path></svg:g>`,
})
export class FluentMicOn28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
