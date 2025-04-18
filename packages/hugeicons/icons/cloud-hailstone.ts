import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCloudHailstoneIcon],svg[hugeicons-cloud-hailstone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.478 8.78h.022c2.485 0 4.5 1.941 4.5 4.335c0 1.703-1.018 3.176-2.5 3.885m-2.022-8.22q.021-.238.022-.481C17.5 5.372 15.038 3 12 3C9.123 3 6.762 5.128 6.52 7.839m10.958.941a5.17 5.17 0 0 1-1.235 2.89M6.52 7.84C3.984 8.07 2 10.129 2 12.634C2 14.566 3.181 16.233 4.886 17M6.52 7.839q.237-.022.48-.022c1.126 0 2.165.358 3 .963M11.998 14l.004.008m2.995 2.989l.004.007M9 16.997l.004.007m8.993 2.99L18 20m-12-.008l.004.008m5.994.991l.004.008" color="currentColor"></svg:path>`,
})
export class HugeiconsCloudHailstoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
