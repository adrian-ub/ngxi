import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentShapes48FilledIcon],svg[fluent-shapes-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.25 15.5h7.603C29.887 8.993 24.276 4 17.5 4C10.044 4 4 10.044 4 17.5c0 6.776 4.993 12.387 11.5 13.353V23.25a7.75 7.75 0 0 1 7.75-7.75m0 2.5A5.25 5.25 0 0 0 18 23.25v15.5c0 2.9 2.35 5.25 5.25 5.25h15.5c2.9 0 5.25-2.35 5.25-5.25v-15.5c0-2.9-2.35-5.25-5.25-5.25z"></svg:path>`,
})
export class FluentShapes48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
