import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineClothesGlovesTwoIcon],svg[icon-park-outline-clothes-gloves-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M34 22v-7m0 0c0-4.691 0-7.037-1.24-8.653a6 6 0 0 0-1.107-1.107C30.037 4 27.69 4 23 4h-1c-5.657 0-8.485 0-10.243 1.757C10 7.515 10 10.343 10 16v22h24v-6s7 0 7-6v-5c0-6-7-6-7-6M9 38h26a3 3 0 1 1 0 6H9a3 3 0 1 1 0-6"></svg:path>`,
})
export class IconParkOutlineClothesGlovesTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
