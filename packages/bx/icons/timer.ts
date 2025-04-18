import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxTimerIcon],svg[bx-timer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.145 8.27l1.563-1.563l-1.414-1.414L18.586 7c-1.05-.63-2.274-1-3.586-1c-3.859 0-7 3.14-7 7s3.141 7 7 7s7-3.14 7-7a6.97 6.97 0 0 0-1.855-4.73M15 18c-2.757 0-5-2.243-5-5s2.243-5 5-5s5 2.243 5 5s-2.243 5-5 5"></svg:path><svg:path fill="currentColor" d="M14 10h2v4h-2zm-1-7h4v2h-4zM3 8h4v2H3zm0 8h4v2H3zm-1-4h3.99v2H2z"></svg:path>`,
})
export class BxTimerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
