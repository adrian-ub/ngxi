import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentRectanglePortrait16FilledIcon],svg[fluent-rectangle-portrait-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 12.5A2.5 2.5 0 0 0 5.5 15h5a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 10.5 1h-5A2.5 2.5 0 0 0 3 3.5z"></svg:path>`,
})
export class FluentRectanglePortrait16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
