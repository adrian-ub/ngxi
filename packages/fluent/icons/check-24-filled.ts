import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCheck24FilledIcon],svg[fluent-check-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.77 5.79a.75.75 0 1 0-1.04-1.08l-6.75 6.5a.75.75 0 1 0 1.04 1.08zM18.987 5H4.55A2.55 2.55 0 0 0 2 7.55v6.9A2.55 2.55 0 0 0 4.55 17h14.9A2.55 2.55 0 0 0 22 14.45v-6.9q0-.278-.057-.538l-6.23 5.999a1.75 1.75 0 0 1-2.427-2.522zM4.5 9.25a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75m0 3.5a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class FluentCheck24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
