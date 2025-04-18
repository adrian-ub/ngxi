import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextboxCheckmark32FilledIcon],svg[fluent-textbox-checkmark-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 3A4.5 4.5 0 0 0 3 7.5v17A4.5 4.5 0 0 0 7.5 29h8.875a8.96 8.96 0 0 1-1.861-6H10a1 1 0 1 1 0-2h4.852a9 9 0 0 1 2.484-4.058A1 1 0 0 1 17 17h-7a1 1 0 1 1 0-2h7a1 1 0 0 1 .885 1.466A8.96 8.96 0 0 1 23.5 14.5c2.071 0 3.98.7 5.5 1.875V7.5A4.5 4.5 0 0 0 24.5 3zM10 9h12a1 1 0 1 1 0 2H10a1 1 0 1 1 0-2m13.5 7a7.5 7.5 0 1 1 0 15a7.5 7.5 0 0 1 0-15m4.53 4.72a.75.75 0 0 0-1.06 0l-4.72 4.72l-1.97-1.97a.75.75 0 1 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l5.25-5.25a.75.75 0 0 0 0-1.06"></svg:path>`,
})
export class FluentTextboxCheckmark32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
