import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextT32FilledIcon],svg[fluent-text-t-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 5.25C6 4.56 6.56 4 7.25 4h17.5c.69 0 1.25.56 1.25 1.25v3.5a1.25 1.25 0 1 1-2.5 0V6.5h-6.25v19h1.5a1.25 1.25 0 1 1 0 2.5h-5.5a1.25 1.25 0 1 1 0-2.5h1.5v-19H8.5v2.25a1.25 1.25 0 1 1-2.5 0z"></svg:path>`,
})
export class FluentTextT32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
