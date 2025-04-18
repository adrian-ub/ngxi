import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentContactCard48FilledIcon],svg[fluent-contact-card-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.25 8A4.25 4.25 0 0 0 4 12.25v23.5A4.25 4.25 0 0 0 8.25 40h31.5A4.25 4.25 0 0 0 44 35.75v-23.5A4.25 4.25 0 0 0 39.75 8zM19 20a3 3 0 1 1-6 0a3 3 0 0 1 6 0m-8 6.5a1.5 1.5 0 0 1 1.5-1.5h7a1.5 1.5 0 0 1 1.5 1.5v.5s0 4-5 4s-5-4-5-4zm14-6.25c0-.69.56-1.25 1.25-1.25h9.5a1.25 1.25 0 1 1 0 2.5h-9.5c-.69 0-1.25-.56-1.25-1.25M26.25 26h9.5a1.25 1.25 0 1 1 0 2.5h-9.5a1.25 1.25 0 1 1 0-2.5"></svg:path>`,
})
export class FluentContactCard48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
