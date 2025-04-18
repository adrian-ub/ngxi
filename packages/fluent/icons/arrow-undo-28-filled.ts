import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowUndo28FilledIcon],svg[fluent-arrow-undo-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.251 5.501a5.125 5.125 0 0 1 7.248 7.248L8.955 24.293a1 1 0 0 0 1.414 1.414l11.544-11.544A7.125 7.125 0 1 0 11.837 4.087l-4.5 4.499V3a1 1 0 1 0-2 0v8a1 1 0 0 0 1 1h8.003a1 1 0 1 0 0-2H8.752z"></svg:path>`,
})
export class FluentArrowUndo28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
