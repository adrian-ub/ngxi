import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiPushpinIcon],svg[twemoji-pushpin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#BE1931" d="M23.651 23.297L12.702 12.348l9.386-7.821l9.385 9.385z"></svg:path><svg:path fill="#DD2E44" d="M34.6 13.912a4.42 4.42 0 0 1-6.255 0l-6.257-6.256a4.426 4.426 0 0 1 6.257-6.258L34.6 7.656a4.423 4.423 0 0 1 0 6.256"></svg:path><svg:path fill="#99AAB5" d="M14 17.823S-.593 35.029.188 35.813S18.177 22 18.177 22z"></svg:path><svg:path fill="#DD2E44" d="M25.215 27.991a4.423 4.423 0 0 1-6.258 0L8.009 17.041a4.425 4.425 0 0 1 6.258-6.256l10.948 10.949a4.424 4.424 0 0 1 0 6.257"></svg:path>`,
})
export class TwemojiPushpinIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
