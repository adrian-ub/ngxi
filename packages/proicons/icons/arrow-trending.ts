import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsArrowTrendingIcon],svg[proicons-arrow-trending-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m3.25 16.75l4.793-4.793a1 1 0 0 1 1.414 0l2.586 2.586a1 1 0 0 0 1.414 0L19.75 8.25l.56-.56m-5.56-.44h4.5c.414 0 .79.168 1.06.44m.44 5.56v-4.5c0-.414-.168-.79-.44-1.06"></svg:path>`,
})
export class ProiconsArrowTrendingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
