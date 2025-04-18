import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNumberCircle2Icon],svg[arcticons-number-circle-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.7 21.3a5.305 5.305 0 0 1 6.352-5.199c2.223.427 3.997 2.35 4.219 4.602c.164 1.676-.366 3.329-1.523 4.345C25.604 26.929 18.7 32 18.7 32h10.6"></svg:path>`,
})
export class ArcticonsNumberCircle2Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
