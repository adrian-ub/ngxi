import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTextHTwoDuotoneIcon],svg[ph-text-h-two-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M240 72v136H56a16 16 0 0 1-16-16V56h184a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M248 208a8 8 0 0 1-8 8h-48a8 8 0 0 1-6.4-12.8l43.16-57.56a16 16 0 1 0-25.54-19.27a16.3 16.3 0 0 0-2.32 4.3a8 8 0 1 1-15.08-5.34a32 32 0 1 1 55.73 29.93L208 200h32a8 8 0 0 1 8 8M144 48a8 8 0 0 0-8 8v52H48V56a8 8 0 0 0-16 0v120a8 8 0 0 0 16 0v-52h88v52a8 8 0 0 0 16 0V56a8 8 0 0 0-8-8"></svg:path></svg:g>`,
})
export class PhTextHTwoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
