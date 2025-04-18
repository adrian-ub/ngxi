import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUv02Icon],svg[hugeicons-uv-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 3v1.5m5 8.5a5 5 0 0 0-10 0M5.988 6.99l-1.06-1.061M22 13h-1.5m-17 0H2m17.07-7.071l-1.06 1.06M6.5 16v3c0 .943 0 1.414.293 1.707S7.557 21 8.5 21v0c.943 0 1.414 0 1.707-.293s.293-.764.293-1.707v-3m3 0l2 5l2-5" color="currentColor"></svg:path>`,
})
export class HugeiconsUv02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
