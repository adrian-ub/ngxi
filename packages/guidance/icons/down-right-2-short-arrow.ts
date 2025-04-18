import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceDownRight2ShortArrowIcon],svg[guidance-down-right-2-short-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M20.991 20.991L3.001 3.001m16.93 2.08c-.786.786-1.183 2.737-1.382 4.51c-.258 2.282-.159 4.6.381 6.834c.404 1.673 1.056 3.543 2.07 4.557M5.081 19.93c.786-.785 2.737-1.181 4.51-1.381c2.282-.258 4.6-.159 6.834.381c1.673.404 3.543 1.056 4.557 2.07"></svg:path>`,
})
export class GuidanceDownRight2ShortArrowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
