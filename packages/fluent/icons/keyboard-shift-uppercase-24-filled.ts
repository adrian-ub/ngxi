import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentKeyboardShiftUppercase24FilledIcon],svg[fluent-keyboard-shift-uppercase-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.32 2.603a1.75 1.75 0 0 0-2.643 0l-8.245 9.504c-.983 1.133-.179 2.897 1.321 2.897H7v2.247c0 .966.784 1.75 1.75 1.75h6.5A1.75 1.75 0 0 0 17 17.25v-2.247h3.245c1.5 0 2.305-1.764 1.322-2.897zM7.75 20.5a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class FluentKeyboardShiftUppercase24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
