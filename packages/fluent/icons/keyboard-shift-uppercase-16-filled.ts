import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentKeyboardShiftUppercase16FilledIcon],svg[fluent-keyboard-shift-uppercase-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.817 1.571a1.51 1.51 0 0 1 2.367 0l4.598 5.802c.52.657.05 1.621-.789 1.621h-1.978V11c0 .553-.45 1.001-1.005 1.001H5.99A1.003 1.003 0 0 1 4.985 11V8.994H3.007c-.84 0-1.31-.965-.789-1.62zM5.5 13a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z"></svg:path>`,
})
export class FluentKeyboardShiftUppercase16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
