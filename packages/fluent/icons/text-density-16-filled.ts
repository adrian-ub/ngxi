import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextDensity16FilledIcon],svg[fluent-text-density-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13a.5.5 0 0 1 .5-.5M7 3H2.5a.5.5 0 0 0 0 1H7zm0 3H2.5a.5.5 0 0 0 0 1H7zm0 3H2.5a.5.5 0 0 0 0 1H7zm0 3H2.5a.5.5 0 0 0 0 1H7zm5.5 0H10V9h2.5a1.5 1.5 0 0 1 0 3m0-5H10V4h2.5a1.5 1.5 0 0 1 0 3"></svg:path>`,
})
export class FluentTextDensity16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
