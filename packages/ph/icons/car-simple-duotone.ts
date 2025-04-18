import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCarSimpleDuotoneIcon],svg[ph-car-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 112H32l29.89-67.25A8 8 0 0 1 69.2 40h117.6a8 8 0 0 1 7.31 4.75Z" opacity=".2"></svg:path><svg:path d="M240 104h-10.8l-27.78-62.5A16 16 0 0 0 186.8 32H69.2a16 16 0 0 0-14.62 9.5L26.8 104H16a8 8 0 0 0 0 16h8v80a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16v-16h96v16a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16v-80h8a8 8 0 0 0 0-16M69.2 48h117.6l24.89 56H44.31ZM216 200h-24v-24a8 8 0 0 0-8-8H72a8 8 0 0 0-8 8v24H40v-80h176Z"></svg:path></svg:g>`,
})
export class PhCarSimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
