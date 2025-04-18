import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBackpack28FilledIcon],svg[fluent-backpack-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 12.25c0-.966.784-1.75 1.75-1.75h3.5c.966 0 1.75.784 1.75 1.75a.25.25 0 0 1-.25.25h-6.5a.25.25 0 0 1-.25-.25M14 2a5.25 5.25 0 0 0-5.19 4.45A10 10 0 0 0 4 15v1h20v-1a10 10 0 0 0-4.81-8.55A5.25 5.25 0 0 0 14 2m0 3c-.913 0-1.798.122-2.638.352A3.25 3.25 0 0 1 14 4c1.086 0 2.048.533 2.638 1.352A10 10 0 0 0 14 5m-1.75 4h3.5A3.25 3.25 0 0 1 19 12.25A1.75 1.75 0 0 1 17.25 14h-6.5A1.75 1.75 0 0 1 9 12.25A3.25 3.25 0 0 1 12.25 9M9 19.25V17.5H4V22a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4v-4.5H10.5v1.75a.75.75 0 0 1-1.5 0"></svg:path>`,
})
export class FluentBackpack28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
