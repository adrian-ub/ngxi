import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLayoutCellFour16FilledIcon],svg[fluent-layout-cell-four-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 14h-3V8.5H14v3a2.5 2.5 0 0 1-2.5 2.5M14 7.5H8.5V2h3A2.5 2.5 0 0 1 14 4.5zm-6.5 0V2h-3A2.5 2.5 0 0 0 2 4.5v3zM2 8.5v3A2.5 2.5 0 0 0 4.5 14h3V8.5z"></svg:path>`,
})
export class FluentLayoutCellFour16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
