import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phFilmStripDuotoneIcon],svg[ph-film-strip-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M32 176h192v24a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8ZM216 48H40a8 8 0 0 0-8 8v24h192V56a8 8 0 0 0-8-8" opacity=".2"></svg:path><svg:path d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M40 88h80v80H40Zm96-16V56h32v16Zm-16 0H88V56h32Zm0 112v16H88v-16Zm16 0h32v16h-32Zm0-16V88h80v80Zm80-96h-32V56h32ZM72 56v16H40V56ZM40 184h32v16H40Zm176 16h-32v-16h32z"></svg:path></svg:g>`,
})
export class PhFilmStripDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
