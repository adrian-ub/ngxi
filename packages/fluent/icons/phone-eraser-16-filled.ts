import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPhoneEraser16FilledIcon],svg[fluent-phone-eraser-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.94 1.353a1.5 1.5 0 0 1 2.12 0l1.586 1.586a1.5 1.5 0 0 1 0 2.122L10.06 9.646a1.5 1.5 0 0 1-2.12 0L6.352 8.061a1.5 1.5 0 0 1 0-2.122zM10.292 8L8 5.707l-.94.94a.5.5 0 0 0 0 .706L8.647 8.94a.5.5 0 0 0 .707 0zm-4.56.767a2.5 2.5 0 0 1 0-3.535l4.123-4.124A1.8 1.8 0 0 0 9.25 1h-4.5A1.75 1.75 0 0 0 3 2.75v10.5c0 .966.784 1.75 1.75 1.75h4.5A1.75 1.75 0 0 0 11 13.25v-3.043l-.146.146a2.5 2.5 0 0 1-3.536 0zM6 12h2a.5.5 0 1 1 0 1H6a.5.5 0 0 1 0-1"></svg:path>`,
})
export class FluentPhoneEraser16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
