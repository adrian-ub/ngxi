import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phThumbsDownLightIcon],svg[ph-thumbs-down-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m237.83 157.27l-12-96A22 22 0 0 0 204 42H32a14 14 0 0 0-14 14v88a14 14 0 0 0 14 14h44.29l38.34 76.68A6 6 0 0 0 120 238a38 38 0 0 0 38-38v-18h58a22 22 0 0 0 21.83-24.73M74 146H32a2 2 0 0 1-2-2V56a2 2 0 0 1 2-2h42Zm149.5 20.62A9.9 9.9 0 0 1 216 170h-64a6 6 0 0 0-6 6v24a26 26 0 0 1-22.42 25.75L86 150.58V54h118a10 10 0 0 1 9.92 8.76l12 96a9.9 9.9 0 0 1-2.42 7.86"></svg:path>`,
})
export class PhThumbsDownLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
