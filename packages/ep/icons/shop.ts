import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[epShopIcon],svg[ep-shop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M704 704h64v192H256V704h64v64h384zm188.544-152.192C894.528 559.616 896 567.616 896 576a96 96 0 1 1-192 0a96 96 0 1 1-192 0a96 96 0 1 1-192 0a96 96 0 1 1-192 0c0-8.384 1.408-16.384 3.392-24.192L192 128h640z"></svg:path>`,
})
export class EpShopIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
