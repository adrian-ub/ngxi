import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowsBidirectional20FilledIcon],svg[fluent-arrows-bidirectional-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.678 5.033A.5.5 0 0 1 7 5.5V8h6V5.5a.5.5 0 0 1 .874-.332l4 4.5a.5.5 0 0 1 0 .664l-4 4.5A.5.5 0 0 1 13 14.5V12H7v2.5a.5.5 0 0 1-.874.332l-4-4.5a.5.5 0 0 1 0-.664l4-4.5a.5.5 0 0 1 .552-.135"></svg:path>`,
})
export class FluentArrowsBidirectional20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
