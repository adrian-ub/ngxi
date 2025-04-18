import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageRoundStickerIcon],svg[mage-round-sticker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21.5 12L12 21.5a9.5 9.5 0 1 1 9.5-9.5"></svg:path><svg:path d="M12 21.5a7.9 7.9 0 0 1-.56-3.272a6.787 6.787 0 0 1 6.788-6.756a8.05 8.05 0 0 1 3.272.56"></svg:path></svg:g>`,
})
export class MageRoundStickerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
