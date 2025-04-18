import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsPhotoOutlineIcon],svg[bitcoin-icons-photo-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:rect width="13" height="13" x="5.5" y="5.5" rx="1"></svg:rect><svg:circle cx="9.5" cy="9.5" r="1"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="m8 16l1.5-2.5L11 16l2.5-4l2.5 4"></svg:path></svg:g>`,
})
export class BitcoinIconsPhotoOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
