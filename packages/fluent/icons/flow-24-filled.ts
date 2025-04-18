import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFlow24FilledIcon],svg[fluent-flow-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.08 8.8a1.75 1.75 0 0 0-1.33 1.7v3a3.25 3.25 0 0 1-2.815 3.221A4.001 4.001 0 1 1 9.92 15.2a1.75 1.75 0 0 0 1.33-1.699v-3a3.25 3.25 0 0 1 2.815-3.221A4.001 4.001 0 0 1 22 8a4 4 0 0 1-7.92.8"></svg:path>`,
})
export class FluentFlow24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
