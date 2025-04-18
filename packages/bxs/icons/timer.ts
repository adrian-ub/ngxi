import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsTimerIcon],svg[bxs-timer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 3h4v2h-4zM3 8h4v2H3zm0 8h4v2H3zm-1-4h3.99v2H2zm19.707-5.293l-1.414-1.414L18.586 7A6.94 6.94 0 0 0 15 6c-3.859 0-7 3.141-7 7s3.141 7 7 7s7-3.141 7-7a6.97 6.97 0 0 0-1.855-4.73zM16 14h-2V8.958h2z"></svg:path>`,
})
export class BxsTimerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
