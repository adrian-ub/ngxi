import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentGridDots24FilledIcon],svg[fluent-grid-dots-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 17a2 2 0 1 1 0 4a2 2 0 0 1 0-4m7 0a2 2 0 1 1 0 4a2 2 0 0 1 0-4M5 17a2 2 0 1 1 0 4a2 2 0 0 1 0-4m7-7a2 2 0 1 1 0 4a2 2 0 0 1 0-4m7 0a2 2 0 1 1 0 4a2 2 0 0 1 0-4M5 10a2 2 0 1 1 0 4a2 2 0 0 1 0-4m7-7a2 2 0 1 1 0 4a2 2 0 0 1 0-4m7 0a2 2 0 1 1 0 4a2 2 0 0 1 0-4M5 3a2 2 0 1 1 0 4a2 2 0 0 1 0-4"></svg:path>`,
})
export class FluentGridDots24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
