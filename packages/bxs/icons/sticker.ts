import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsStickerIcon],svg[bxs-sticker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.5 11c-4.136 0-7.5 3.364-7.5 7.5c0 .871.157 1.704.432 2.482l9.551-9.551A7.5 7.5 0 0 0 18.5 11"></svg:path><svg:path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12c0 4.583 3.158 8.585 7.563 9.69A9.4 9.4 0 0 1 9 18.5C9 13.262 13.262 9 18.5 9c1.12 0 2.191.205 3.19.563C20.585 5.158 16.583 2 12 2"></svg:path>`,
})
export class BxsStickerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
