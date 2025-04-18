import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDust24FilledIcon],svg[fluent-dust-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2m16 8a1 1 0 1 1-2 0a1 1 0 0 1 2 0M7 21a1 1 0 1 1-2 0a1 1 0 0 1 2 0M8.664 6.943A5.252 5.252 0 0 1 19 8.25c0 1.47-.604 2.798-1.576 3.75a5.25 5.25 0 1 1-8.76 5.057a5.25 5.25 0 1 1 0-10.114"></svg:path>`,
})
export class FluentDust24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
