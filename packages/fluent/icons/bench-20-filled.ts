import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBench20FilledIcon],svg[fluent-bench-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 4a2 2 0 0 0-2 2v4h14V6a2 2 0 0 0-2-2zm-2.5 7a1.5 1.5 0 0 0 0 3H3v1.5a.5.5 0 0 0 1 0V14h12v1.5a.5.5 0 0 0 1 0V14h.5a1.5 1.5 0 0 0 0-3z"></svg:path>`,
})
export class FluentBench20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
