import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFlipLeftIcon],svg[hugeicons-flip-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 9.667v4.666M7.5 3.015C8 2.998 8.5 2.997 9 3M7.5 20.985c.5.017 1 .018 1.5.017M4.745 3.537a5 5 0 0 0-2.217 2.226M2.5 18.18a5 5 0 0 0 2.245 2.283M12 5.505c0-1.958.638-2.498 2.5-2.498c2.532 0 5.454-.25 6.897 2.248C22 6.3 22 7.7 22 10.501V13.5c0 2.801 0 4.202-.603 5.246c-1.443 2.498-4.365 2.248-6.897 2.248c-1.862 0-2.5-.54-2.5-2.498z" color="currentColor"></svg:path>`,
})
export class HugeiconsFlipLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
