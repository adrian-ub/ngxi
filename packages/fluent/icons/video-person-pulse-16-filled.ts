import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentVideoPersonPulse16FilledIcon],svg[fluent-video-person-pulse-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 5a2 2 0 1 1-4 0a2 2 0 0 1 4 0M1.75 1A1.75 1.75 0 0 0 0 2.75v6.5C0 10.216.784 11 1.75 11h4.272a5.5 5.5 0 0 1 1.235-3H5a1 1 0 0 0-1 1v1H1.75A.75.75 0 0 1 1 9.25v-6.5A.75.75 0 0 1 1.75 2h10.5a.75.75 0 0 1 .75.75v3.457q.524.149 1 .393V2.75A1.75 1.75 0 0 0 12.25 1zM16 11.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-5.556-2a.5.5 0 0 0-.475.303l-.584 1.364H9a.5.5 0 1 0 0 1h.714a.5.5 0 0 0 .46-.303l.212-.496l.643 1.8a.5.5 0 0 0 .935.018l.672-1.673l.209.39a.5.5 0 0 0 .44.264H14a.5.5 0 0 0 0-1h-.415l-.573-1.07a.5.5 0 0 0-.905.05l-.58 1.443l-.628-1.758a.5.5 0 0 0-.455-.332"></svg:path>`,
})
export class FluentVideoPersonPulse16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
