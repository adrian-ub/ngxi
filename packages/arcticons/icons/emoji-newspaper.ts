import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEmojiNewspaperIcon],svg[arcticons-emoji-newspaper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.133 39.147h1.61c1.115 0 1.752-.677 1.752-1.791V8.853H8.868m-.001 7.425H35.77m-9.706 4.112h9.706m-9.706 4.283h9.706m-9.706 4.282h9.706m-9.706 4.282h9.706"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.505 12.244h33.628v26.903H5.505z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.867 19.718h13.455v13.455H8.867z"></svg:path>`,
})
export class ArcticonsEmojiNewspaperIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
