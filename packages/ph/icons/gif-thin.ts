import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phGifThinIcon],svg[ph-gif-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M140 72v112a4 4 0 0 1-8 0V72a4 4 0 0 1 8 0m92-4h-56a4 4 0 0 0-4 4v112a4 4 0 0 0 8 0v-52h44a4 4 0 0 0 0-8h-44V76h52a4 4 0 0 0 0-8M96 124H72a4 4 0 0 0 0 8h20v20a28 28 0 0 1-56 0v-48a28 28 0 0 1 28-28c13 0 25 9 28.13 21a4 4 0 1 0 7.74-2C95.85 79.36 80.76 68 64 68a36 36 0 0 0-36 36v48a36 36 0 0 0 72 0v-24a4 4 0 0 0-4-4"></svg:path>`,
})
export class PhGifThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
