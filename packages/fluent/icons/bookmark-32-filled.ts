import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBookmark32FilledIcon],svg[fluent-bookmark-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.2 3A4.2 4.2 0 0 0 6 7.2V28a1 1 0 0 0 1.585.81L16 22.735l8.415 6.077A1 1 0 0 0 26 28V7.2A4.2 4.2 0 0 0 21.8 3z"></svg:path>`,
})
export class FluentBookmark32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
