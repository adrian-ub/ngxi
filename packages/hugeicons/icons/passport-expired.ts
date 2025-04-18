import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPassportExpiredIcon],svg[hugeicons-passport-expired-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M22 11v2c0 4.243 0 6.364-1.465 7.682C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.318S2 17.242 2 13s0-6.364 1.464-7.682C4.93 4 7.286 4 12 4h1"></svg:path><svg:path d="M5 17.5c1.208-2.581 5.712-2.75 7 0m-1.5-7a2 2 0 1 1-4 0a2 2 0 0 1 4 0M16 2l3 3m0 0l3 3m-3-3l-3 3m3-3l3-3"></svg:path></svg:g>`,
})
export class HugeiconsPassportExpiredIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
