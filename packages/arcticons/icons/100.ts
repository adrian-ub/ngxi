import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticons100Icon],svg[arcticons-100-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12.083 19.997l2.75-1.497v11"></svg:path><svg:rect width="7.287" height="11" x="18.17" y="18.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3.644" ry="3.644"></svg:rect><svg:rect width="7.287" height="11" x="28.629" y="18.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3.644" ry="3.644"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path>`,
})
export class Arcticons100Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
