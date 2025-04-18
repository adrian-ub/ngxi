import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceUpRight2ShortArrowIcon],svg[guidance-up-right-2-short-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M20.991 3.009L3.001 21m16.93-2.081c-.786-.786-1.183-2.737-1.382-4.51c-.258-2.282-.159-4.6.381-6.834c.404-1.673 1.056-3.543 2.07-4.557M5.081 4.07c.786.785 2.737 1.182 4.51 1.381c2.282.258 4.6.159 6.834-.381c1.673-.404 3.543-1.056 4.557-2.07"></svg:path>`,
})
export class GuidanceUpRight2ShortArrowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
