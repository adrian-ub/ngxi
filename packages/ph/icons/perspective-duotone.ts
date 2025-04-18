import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPerspectiveDuotoneIcon],svg[ph-perspective-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 48v160a8 8 0 0 1-9.43 7.87l-160-29.09a8 8 0 0 1-6.57-7.87V77.09a8 8 0 0 1 6.57-7.87l160-29.09A8 8 0 0 1 216 48" opacity=".2"></svg:path><svg:path d="M240 120h-16V48a16 16 0 0 0-18.86-15.74l-160 29.09A16 16 0 0 0 32 77.09V120H16a8 8 0 0 0 0 16h16v42.91a16 16 0 0 0 13.14 15.74l160 29.09a16.5 16.5 0 0 0 2.86.26a16 16 0 0 0 16-16v-72h16a8 8 0 0 0 0-16M48 77.09L208 48v72H48ZM208 208L48 178.91V136h160Z"></svg:path></svg:g>`,
})
export class PhPerspectiveDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
