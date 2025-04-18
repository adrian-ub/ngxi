import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsRatingsIcon],svg[flat-color-icons-ratings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#42A5F5" d="M36 44H8V8h20l8 8z"></svg:path><svg:path fill="#90CAF9" d="M40 40H12V4h20l8 8z"></svg:path><svg:path fill="#E1F5FE" d="M38.5 13H31V5.5z"></svg:path><svg:path fill="#1976D2" d="M34 20h-7l2.4 2.4l-2.4 2.5l-4-4l-6.1 6l2.2 2.2l3.9-4l4 4l4.6-4.5L34 27z"></svg:path>`,
})
export class FlatColorIconsRatingsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
