import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSafewaIcon],svg[arcticons-safewa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.5 42.5h2c2.216 0 4-1.784 4-4v-2m-37 0v2c0 2.216 1.784 4 4 4h2m31-31v-2c0-2.216-1.784-4-4-4h-2m-25 0h-2c-2.216 0-4 1.784-4 4v2m29.426 22.191V11.69L30.764 7.5l-7.284 9.428l-10.406 4.19l1.04 7.334l2.602 6.81l-1.561 3.666l6.243 1.572l.446-1.048z"></svg:path>`,
})
export class ArcticonsSafewaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
