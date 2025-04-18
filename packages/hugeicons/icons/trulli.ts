import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTrulliIcon],svg[hugeicons-trulli-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m3.672 10.547l3.808-4.7C9.557 3.282 10.596 2 12 2s2.443 1.282 4.52 3.847l3.808 4.7c.513.633.769.95.638 1.201c-.13.252-.55.252-1.391.252H4.425c-.84 0-1.26 0-1.391-.252c-.13-.252.125-.568.638-1.2"></svg:path><svg:path d="M6 8.508c3.328.899 4.821-3.277 7.58-.598C15 9.29 16.415 9.205 18 8.508M10 22v-4a2 2 0 0 1 4 0v4"></svg:path><svg:path d="M19.5 12v8c0 .943 0 1.414-.293 1.707S18.443 22 17.5 22h-11c-.943 0-1.414 0-1.707-.293S4.5 20.943 4.5 20v-8"></svg:path></svg:g>`,
})
export class HugeiconsTrulliIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
