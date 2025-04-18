import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phGifFillIcon],svg[ph-gif-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M112 144a32 32 0 0 1-64 0v-32a32 32 0 0 1 55.85-21.33a8 8 0 1 1-11.92 10.66A16 16 0 0 0 64 112v32a16 16 0 0 0 32 0v-8h-8a8 8 0 0 1 0-16h16a8 8 0 0 1 8 8Zm32 24a8 8 0 0 1-16 0V88a8 8 0 0 1 16 0Zm60-72h-28v24h20a8 8 0 0 1 0 16h-20v32a8 8 0 0 1-16 0V88a8 8 0 0 1 8-8h36a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhGifFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
