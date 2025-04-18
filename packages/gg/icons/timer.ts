import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggTimerIcon],svg[gg-timer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M13 5.07A7.002 7.002 0 0 1 12 19A7 7 0 0 1 7.262 6.847L5.847 5.432A9 9 0 1 0 11 3.055v6.03h2z"></svg:path><svg:path d="M7.707 8.707a1 1 0 0 0 0 1.414l2.829 2.829a1 1 0 0 0 1.414-1.414L9.12 8.707a1 1 0 0 0-1.414 0"></svg:path></svg:g>`,
})
export class GgTimerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
