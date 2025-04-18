import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentAlignCenterHorizontal32FilledIcon],svg[fluent-align-center-horizontal-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 16a1 1 0 0 1-1 1h-2v3.5a3.5 3.5 0 0 1-3.5 3.5h-3a3.5 3.5 0 0 1-3.5-3.5V17h-2v6.5a3.5 3.5 0 0 1-3.5 3.5h-3A3.5 3.5 0 0 1 5 23.5V17H3a1 1 0 1 1 0-2h2V8.5A3.5 3.5 0 0 1 8.5 5h3A3.5 3.5 0 0 1 15 8.5V15h2v-3.5A3.5 3.5 0 0 1 20.5 8h3a3.5 3.5 0 0 1 3.5 3.5V15h2a1 1 0 0 1 1 1"></svg:path>`,
})
export class FluentAlignCenterHorizontal32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
