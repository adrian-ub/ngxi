import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBorder24RegularIcon],svg[fluent-border-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="M14 3.75a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h2.5a.75.75 0 0 1 .75.75z" fill="currentColor"></svg:path><svg:path d="M4.5 10.75a.75.75 0 0 0-1.5 0v2.5a.75.75 0 0 0 1.5 0v-2.5z" fill="currentColor"></svg:path><svg:path d="M19.5 10.75a.75.75 0 0 1 1.5 0v2.5a.75.75 0 0 1-1.5 0v-2.5z" fill="currentColor"></svg:path><svg:path d="M13.25 21a.75.75 0 0 0 0-1.5h-2.5a.75.75 0 0 0 0 1.5h2.5z" fill="currentColor"></svg:path><svg:path d="M7 3.75A.75.75 0 0 0 6.25 3h-.5A2.75 2.75 0 0 0 3 5.75v.5a.75.75 0 0 0 1.5 0v-.5c0-.69.56-1.25 1.25-1.25h.5A.75.75 0 0 0 7 3.75z" fill="currentColor"></svg:path><svg:path d="M17.75 3a.75.75 0 0 0 0 1.5h.5c.69 0 1.25.56 1.25 1.25v.5a.75.75 0 0 0 1.5 0v-.5A2.75 2.75 0 0 0 18.25 3h-.5z" fill="currentColor"></svg:path><svg:path d="M7 20.25a.75.75 0 0 1-.75.75h-.5A2.75 2.75 0 0 1 3 18.25v-.5a.75.75 0 0 1 1.5 0v.5c0 .69.56 1.25 1.25 1.25h.5a.75.75 0 0 1 .75.75z" fill="currentColor"></svg:path><svg:path d="M17.75 21a.75.75 0 0 1 0-1.5h.5c.69 0 1.25-.56 1.25-1.25v-.5a.75.75 0 0 1 1.5 0v.5A2.75 2.75 0 0 1 18.25 21h-.5z" fill="currentColor"></svg:path></svg:g>`,
})
export class FluentBorder24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
