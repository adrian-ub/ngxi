import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatWatchIcon],svg[fluent-emoji-flat-watch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#3F5FFF" d="M9 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v4.252A11.95 11.95 0 0 0 16 5c-2.612 0-5.03.835-7 2.252zm7 24c2.612 0 5.03-.835 7-2.252V29a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1v-4.252A11.95 11.95 0 0 0 16 27m11-13a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h1.5a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1z"></svg:path><svg:path fill="#A4AEEB" d="M28 16c0 6.627-5.373 12-12 12S4 22.627 4 16S9.373 4 16 4s12 5.373 12 12"></svg:path><svg:path fill="#5235A6" d="M25 16a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path><svg:path fill="#fff" d="M16 8a1 1 0 0 0-1 1v6c0 .21.065.406.177.568l-3.267 3.641a1 1 0 1 0 1.49 1.336l3.338-3.722a1 1 0 0 0 .075-1.24A1 1 0 0 0 17 15V9a1 1 0 0 0-1-1"></svg:path><svg:path fill="#FCD53F" d="M18 16a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path></svg:g>`,
})
export class FluentEmojiFlatWatchIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
