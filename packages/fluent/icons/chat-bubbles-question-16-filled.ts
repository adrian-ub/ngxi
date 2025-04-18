import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentChatBubblesQuestion16FilledIcon],svg[fluent-chat-bubbles-question-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.86 12.892A4.98 4.98 0 0 0 9 14c.754 0 1.47-.167 2.113-.467l2.289.457a.5.5 0 0 0 .588-.588l-.457-2.288c.3-.643.467-1.36.467-2.114a4.98 4.98 0 0 0-1.108-3.139a6 6 0 0 1 .007 2.242a4 4 0 0 1-.335 2.715a.5.5 0 0 0-.045.326l.344 1.719l-1.72-.344a.5.5 0 0 0-.325.045a4 4 0 0 1-2.716.335a6 6 0 0 1-2.242-.007M2 7a5 5 0 1 1 2.886 4.533l-2.288.457a.5.5 0 0 1-.588-.588l.457-2.289A5 5 0 0 1 2 7m5 1.88a.625.625 0 1 0 0 1.25a.625.625 0 0 0 0-1.25m0-4.877c-1.048 0-1.864.818-1.853 1.955a.5.5 0 1 0 1-.01c-.006-.579.36-.945.853-.945c.472 0 .853.392.853.95c0 .202-.07.315-.36.544l-.277.215C6.71 7.116 6.5 7.429 6.5 8a.5.5 0 0 0 .992.09l.011-.156c.017-.148.1-.254.346-.448l.277-.215c.513-.41.727-.732.727-1.318c0-1.104-.822-1.95-1.853-1.95"></svg:path>`,
})
export class FluentChatBubblesQuestion16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
