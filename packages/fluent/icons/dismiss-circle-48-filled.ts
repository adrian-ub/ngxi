import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDismissCircle48FilledIcon],svg[fluent-dismiss-circle-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 4c11.046 0 20 8.954 20 20s-8.954 20-20 20S4 35.046 4 24S12.954 4 24 4m-6.116 12.116l-.102-.091a1.25 1.25 0 0 0-1.564 0l-.102.091l-.091.102a1.25 1.25 0 0 0 0 1.564l.091.102L22.233 24l-6.117 6.116l-.091.102a1.25 1.25 0 0 0 0 1.564l.091.102l.102.091a1.25 1.25 0 0 0 1.564 0l.102-.091L24 25.767l6.116 6.117l.102.091a1.25 1.25 0 0 0 1.564 0l.102-.091l.091-.102a1.25 1.25 0 0 0 0-1.564l-.091-.102L25.767 24l6.117-6.116l.091-.102a1.25 1.25 0 0 0 0-1.564l-.091-.102l-.102-.091a1.25 1.25 0 0 0-1.564 0l-.102.091L24 22.233zl-.102-.091z"></svg:path>`,
})
export class FluentDismissCircle48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
