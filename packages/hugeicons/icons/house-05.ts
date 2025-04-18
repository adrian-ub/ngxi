import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsHouse05Icon],svg[hugeicons-house-05-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M4 11h16v11H4z"></svg:path><svg:path d="M14.5 22v-3c0-.943 0-1.414-.293-1.707S13.443 17 12.5 17h-1c-.943 0-1.414 0-1.707.293S9.5 18.057 9.5 19v3M2 9.723c0-.578.27-1.04.817-1.224l8.113-2.711C11.79 5.5 12 5.026 12 4.186c0-.757-.124-2.269 1.064-2.184c.28.02.62.285 1.298.814l7.077 5.519c.4.311.561.682.561 1.2c0 .943-.396 1.465-1.315 1.465H3.147C2.41 11 2 10.456 2 9.723M3 22h18M7 15h1m9 0h-1M5 7.5V3"></svg:path></svg:g>`,
})
export class HugeiconsHouse05Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
