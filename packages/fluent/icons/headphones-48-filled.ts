import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentHeadphones48FilledIcon],svg[fluent-headphones-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 6.5C14.335 6.5 6.5 14.335 6.5 24v4h9.25c.69 0 1.25.56 1.25 1.25v13.5c0 .69-.56 1.25-1.25 1.25h-6A5.75 5.75 0 0 1 4 38.25V24C4 12.954 12.954 4 24 4s20 8.954 20 20v14.25A5.75 5.75 0 0 1 38.25 44h-6c-.69 0-1.25-.56-1.25-1.25v-13.5c0-.69.56-1.25 1.25-1.25h9.25v-4c0-9.665-7.835-17.5-17.5-17.5"></svg:path>`,
})
export class FluentHeadphones48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
