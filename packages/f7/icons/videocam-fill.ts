import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7VideocamFillIcon],svg[f7-videocam-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M39.5 37a7 7 0 0 1-7 7h-22a7 7 0 0 1-7-7V19a7 7 0 0 1 7-7h22a7 7 0 0 1 7 7zm9.71-22.008a3.25 3.25 0 0 1 3.246 3.066l.005.184v19.66a3.25 3.25 0 0 1-5.187 2.61l-.155-.123l-5.619-4.725V20.553l5.6-4.782a3.25 3.25 0 0 1 1.88-.77z"></svg:path>`,
})
export class F7VideocamFillIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
