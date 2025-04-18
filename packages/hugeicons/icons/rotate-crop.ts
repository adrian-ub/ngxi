import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRotateCropIcon],svg[hugeicons-rotate-crop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2 15c0 3.87 3.13 7 7 7l-1.05-1.75M22 9c0-3.87-3.13-7-7-7l1.05 1.75M7 5v7c0 2.357 0 3.536.732 4.268S9.643 17 12 17h7"></svg:path><svg:path d="M17 19v-7c0-2.357 0-3.536-.732-4.268S14.357 7 12 7H5"></svg:path></svg:g>`,
})
export class HugeiconsRotateCropIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
