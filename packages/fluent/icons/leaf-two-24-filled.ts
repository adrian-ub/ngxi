import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLeafTwo24FilledIcon],svg[fluent-leaf-two-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.707 2c-.941 0-1.705.763-1.705 1.705V8a6 6 0 0 0 5.003 5.917A7.96 7.96 0 0 1 8.408 9.47L6.22 7.28a.75.75 0 0 1 1.06-1.06l2.094 2.093a8 8 0 0 1 4.322-2.21A6 6 0 0 0 8.002 2zm5.847 16.387L7.22 20.719a.75.75 0 1 0 1.06 1.061l2.335-2.333a6.999 6.999 0 0 0 11.389-5.451V8.748a1.75 1.75 0 0 0-1.75-1.75h-5.25a6.999 6.999 0 0 0-5.45 11.389m6.226-4.102l-4.095 4.095a5.5 5.5 0 0 1-1.061-1.06l4.095-4.096a.75.75 0 0 1 1.061 1.061"></svg:path>`,
})
export class FluentLeafTwo24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
