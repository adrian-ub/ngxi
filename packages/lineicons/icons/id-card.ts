import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsIdCardIcon],svg[lineicons-id-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.837 9.861a1.616 1.616 0 1 1 3.232 0a1.616 1.616 0 0 1-3.232 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M7.24 12.087A2.24 2.24 0 0 0 5 14.325v.93c0 .415.336.75.75.75h5.405a.75.75 0 0 0 .75-.75v-.93a2.24 2.24 0 0 0-2.238-2.238zm-.74 2.238c0-.407.33-.738.738-.738h2.429c.407 0 .738.33.738.738v.18H6.501z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M19 10.501a.75.75 0 0 1-.75.75h-4.1a.75.75 0 0 1 0-1.5h4.1a.75.75 0 0 1 .75.75m-2.85 3.75a.75.75 0 0 0 0-1.5h-2a.75.75 0 0 0 0 1.5z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M4.25 4.501A2.25 2.25 0 0 0 2 6.751v10.5a2.25 2.25 0 0 0 2.25 2.25h15.5a2.25 2.25 0 0 0 2.25-2.25v-10.5a2.25 2.25 0 0 0-2.25-2.25zm-.75 2.25a.75.75 0 0 1 .75-.75h15.5a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75H4.25a.75.75 0 0 1-.75-.75z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsIdCardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
