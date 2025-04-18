import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsPhotoFilledIcon],svg[bitcoin-icons-photo-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6 5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zm3.5 6a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m-2.022 4.735l1.598-2.557a.5.5 0 0 1 .848 0l1.305 2.088l2.09-3.537a.5.5 0 0 1 .861 0l2.374 4.017a.5.5 0 0 1-.43.754h-4.748a.5.5 0 0 1-.139-.02a.5.5 0 0 1-.14.02H7.903a.5.5 0 0 1-.424-.765" clip-rule="evenodd"></svg:path>`,
})
export class BitcoinIconsPhotoFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
