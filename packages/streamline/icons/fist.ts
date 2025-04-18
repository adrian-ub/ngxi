import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineFistIcon],svg[streamline-fist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M3.901 13.407v-2.464c-1.304-.452-2.18-1.97-2.18-3.754c0-1.063.24-2.174 1.42-2.174h2.993a1.111 1.111 0 0 1 .322 2.174l-1.71.519c.874 0 1.948.83 1.925 1.905m3.144 3.795v-2.465s.587-.293 1.2-.88c1.181-1.131 1.335-2.919 1.016-4.523c-.107-.534-.26-1.076-.477-1.532m-8.886.934V3.056a1.478 1.478 0 0 1 2.957 0v1.886"></svg:path><svg:path d="M5.625 4.554V2.072a1.48 1.48 0 1 1 2.959 0v2.482a1.48 1.48 0 0 1-1.365 1.474"></svg:path><svg:path d="M8.584 3.057a1.479 1.479 0 1 1 2.957 0v1.27a1.479 1.479 0 1 1-2.957 0z"></svg:path></svg:g>`,
})
export class StreamlineFistIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
