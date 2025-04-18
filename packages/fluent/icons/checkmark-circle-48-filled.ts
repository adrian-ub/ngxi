import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCheckmarkCircle48FilledIcon],svg[fluent-checkmark-circle-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 4c11.046 0 20 8.954 20 20s-8.954 20-20 20S4 35.046 4 24S12.954 4 24 4m8.634 13.616a1.25 1.25 0 0 0-1.666-.091l-.102.091L20.75 27.732l-3.616-3.616a1.25 1.25 0 0 0-1.859 1.666l.091.102l4.5 4.5a1.25 1.25 0 0 0 1.666.091l.102-.091l11-11a1.25 1.25 0 0 0 0-1.768"></svg:path>`,
})
export class FluentCheckmarkCircle48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
