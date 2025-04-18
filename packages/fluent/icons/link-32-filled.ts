import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLink32FilledIcon],svg[fluent-link-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 16.25A7.25 7.25 0 0 1 9.25 9h3.5a1.25 1.25 0 1 1 0 2.5h-3.5a4.75 4.75 0 1 0 0 9.5h3.5a1.25 1.25 0 1 1 0 2.5h-3.5A7.25 7.25 0 0 1 2 16.25m28 0A7.25 7.25 0 0 0 22.75 9h-3.5a1.25 1.25 0 1 0 0 2.5h3.5a4.75 4.75 0 1 1 0 9.5h-3.5a1.25 1.25 0 1 0 0 2.5h3.5A7.25 7.25 0 0 0 30 16.25M9.75 15a1.25 1.25 0 1 0 0 2.5h12.5a1.25 1.25 0 1 0 0-2.5z"></svg:path>`,
})
export class FluentLink32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
