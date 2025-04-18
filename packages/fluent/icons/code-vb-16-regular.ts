import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCodeVb16RegularIcon],svg[fluent-code-vb-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.278 7.9A2.248 2.248 0 0 0 11.75 4H9.5a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5H12a2.25 2.25 0 0 0 1.278-4.1M13 6.25a1.25 1.25 0 0 1-1.25 1.25H10V5h1.75A1.25 1.25 0 0 1 13 6.25M12 11h-2V8.5h2a1.25 1.25 0 1 1 0 2.5M7.971 4.668l-2.5 7a.5.5 0 0 1-.942 0l-2.5-7a.5.5 0 1 1 .942-.336l2.03 5.681l2.028-5.68a.5.5 0 0 1 .942.335"></svg:path>`,
})
export class FluentCodeVb16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
