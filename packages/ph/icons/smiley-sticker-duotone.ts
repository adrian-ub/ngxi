import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSmileyStickerDuotoneIcon],svg[ph-smiley-sticker-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a95.9 95.9 0 0 1-4.21 28.21l-63.57 63.58A96 96 0 1 1 224 128" opacity=".2"></svg:path><svg:path d="M174.92 156c-10.29 17.79-27.39 28-46.92 28s-36.63-10.2-46.92-28a8 8 0 1 1 13.84-8c7.47 12.91 19.21 20 33.08 20s25.61-7.1 33.08-20a8 8 0 1 1 13.84 8M232 128a104.4 104.4 0 0 1-4.56 30.56a8 8 0 0 1-2 3.31l-63.57 63.57a7.9 7.9 0 0 1-3.3 2A104 104 0 1 1 232 128m-16 0a87.89 87.89 0 1 0-64 84.69L212.69 152a88 88 0 0 0 3.31-24m-124-8a12 12 0 1 0-12-12a12 12 0 0 0 12 12m72-24a12 12 0 1 0 12 12a12 12 0 0 0-12-12"></svg:path></svg:g>`,
})
export class PhSmileyStickerDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
