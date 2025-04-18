import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDust20FilledIcon],svg[fluent-dust-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.75 3.5a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m2.34 2.652A4.001 4.001 0 1 1 14.646 10a4 4 0 1 1-6.556 3.85a4 4 0 1 1 0-7.699M5.75 18a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5M19 10a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0"></svg:path>`,
})
export class FluentDust20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
