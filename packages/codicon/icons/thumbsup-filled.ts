import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconThumbsupFilledIcon],svg[codicon-thumbsup-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 8.5v5c0 .827.673 1.5 1.5 1.5H4V7H2.5C1.673 7 1 7.673 1 8.5m13.571-1.685A1.98 1.98 0 0 0 12.959 6H9.526l.464-2.32a2.24 2.24 0 0 0-.464-1.86A2.23 2.23 0 0 0 7.794 1c-.444 0-.839.298-.951.693l-.464 1.286a16 16 0 0 1-1.378 2.876V15h6.397a1.99 1.99 0 0 0 1.909-1.404l1.562-5a1.98 1.98 0 0 0-.298-1.781"></svg:path>`,
})
export class CodiconThumbsupFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
