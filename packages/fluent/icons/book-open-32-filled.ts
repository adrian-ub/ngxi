import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBookOpen32FilledIcon],svg[fluent-book-open-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.25 4A2.25 2.25 0 0 0 2 6.25v19.5A2.25 2.25 0 0 0 4.25 28h8c1.524 0 2.88-.718 3.75-1.834A4.74 4.74 0 0 0 19.75 28h8A2.25 2.25 0 0 0 30 25.75V6.25A2.25 2.25 0 0 0 27.75 4h-8c-1.524 0-2.88.718-3.75 1.834A4.74 4.74 0 0 0 12.25 4zm.25 21.5v-19h7.75a2.25 2.25 0 0 1 2.25 2.25v14.5a2.25 2.25 0 0 1-2.25 2.25zm13-16.75a2.25 2.25 0 0 1 2.25-2.25h7.75v19h-7.75a2.25 2.25 0 0 1-2.25-2.25z"></svg:path>`,
})
export class FluentBookOpen32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
