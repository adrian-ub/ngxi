import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMoreCircle32FilledIcon],svg[fluent-more-circle-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 30c7.732 0 14-6.268 14-14S23.732 2 16 2S2 8.268 2 16s6.268 14 14 14m-6-12a2 2 0 1 1 0-4a2 2 0 0 1 0 4m8-2a2 2 0 1 1-4 0a2 2 0 0 1 4 0m4 2a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path>`,
})
export class FluentMoreCircle32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
