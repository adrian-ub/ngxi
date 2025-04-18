import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEmojiBananaIcon],svg[arcticons-emoji-banana-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.377 39.33c12.459-2.167 18.24-8.308 19.897-20.203"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.603 37.45c-6.047 5.378-17.196 7.047-24.193 2.056l-.31-1.418c13.742-1.645 24.455-10.41 26.38-26.51c.824-.003 3.465-.295 3.465-.295c4.177 11.26 1.309 20.246-5.344 26.16zm3.395-28.74l-.425-3.2m.425 3.2l.28 2.742"></svg:path>`,
})
export class ArcticonsEmojiBananaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
