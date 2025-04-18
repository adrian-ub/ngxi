import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentChatMultiple16FilledIcon],svg[fluent-chat-multiple-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.86 12.892A4.98 4.98 0 0 0 9 14c.754 0 1.47-.167 2.113-.467l2.289.457a.5.5 0 0 0 .588-.588l-.457-2.288c.3-.643.467-1.36.467-2.114a4.98 4.98 0 0 0-1.108-3.139a6 6 0 0 1 .007 2.242a4 4 0 0 1-.335 2.715a.5.5 0 0 0-.045.326l.344 1.719l-1.72-.344a.5.5 0 0 0-.325.045a4 4 0 0 1-2.716.335a6 6 0 0 1-2.242-.007M7 2a5 5 0 0 0-4.533 7.113l-.457 2.289a.5.5 0 0 0 .588.588l2.288-.457A5 5 0 1 0 7 2"></svg:path>`,
})
export class FluentChatMultiple16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
