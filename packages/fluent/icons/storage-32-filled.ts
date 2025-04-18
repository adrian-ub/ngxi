import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentStorage32FilledIcon],svg[fluent-storage-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 9A4.5 4.5 0 0 0 2 13.5v5A4.5 4.5 0 0 0 6.5 23h19a4.5 4.5 0 0 0 4.5-4.5v-5A4.5 4.5 0 0 0 25.5 9zM21 14.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m3.5 1.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"></svg:path>`,
})
export class FluentStorage32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
