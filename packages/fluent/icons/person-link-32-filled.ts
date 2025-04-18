import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPersonLink32FilledIcon],svg[fluent-person-link-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 16a7 7 0 1 0 0-14a7 7 0 0 0 0 14m-8.5 2A3.5 3.5 0 0 0 3 21.5v.5c0 2.393 1.523 4.417 3.685 5.793C8.859 29.177 11.802 30 15 30q.262 0 .521-.007A6 6 0 0 1 20 20h6q.345 0 .681.038A3.5 3.5 0 0 0 23.5 18zm15 4.5a1 1 0 0 0-1-1H20a4.5 4.5 0 1 0 0 9h.5a1 1 0 1 0 0-2H20a2.5 2.5 0 0 1 0-5h.5a1 1 0 0 0 1-1m4-1a1 1 0 1 0 0 2h.5a2.5 2.5 0 0 1 0 5h-.5a1 1 0 1 0 0 2h.5a4.5 4.5 0 1 0 0-9zm-5 3.5a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2z"></svg:path>`,
})
export class FluentPersonLink32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
