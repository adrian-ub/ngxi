import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentChatMultipleCheckmark16FilledIcon],svg[fluent-chat-multiple-checkmark-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 14a4.98 4.98 0 0 1-3.14-1.108a6 6 0 0 0 2.242.007a4 4 0 0 0 2.716-.335a.5.5 0 0 1 .326-.045l1.719.344l-.344-1.72a.5.5 0 0 1 .045-.325a4 4 0 0 0 .335-2.716a6 6 0 0 0-.007-2.24A4.98 4.98 0 0 1 14 9a5 5 0 0 1-.467 2.114l.457 2.288a.5.5 0 0 1-.588.588l-2.289-.457A5 5 0 0 1 9 14M2 7a5 5 0 1 1 2.886 4.533l-2.288.457a.5.5 0 0 1-.588-.588l.457-2.289A5 5 0 0 1 2 7m7.35-.643a.5.5 0 1 0-.7-.714L6.446 7.808L5.34 6.778a.5.5 0 0 0-.682.732l1.455 1.356a.5.5 0 0 0 .69-.01z"></svg:path>`,
})
export class FluentChatMultipleCheckmark16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
