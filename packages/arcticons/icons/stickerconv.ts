import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsStickerconvIcon],svg[arcticons-stickerconv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.611 45.44q-.798.06-1.611.06A21.5 21.5 0 1 1 45.5 24q0 .766-.053 1.518"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.564 45.326a21.504 21.504 0 0 1 19.868-19.77m-17.633 4.278l-4.058 4.058l-5.575-5.626l-5.575 5.626l-4.058-4.058l9.633-9.633Zm-7.598-11.668l4.058-4.058l5.575 5.626l5.575-5.626l4.058 4.058l-9.633 9.633Zm5.41 27.274l19.821-19.884"></svg:path>`,
})
export class ArcticonsStickerconvIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
