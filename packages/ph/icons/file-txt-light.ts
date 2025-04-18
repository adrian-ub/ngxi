import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phFileTxtLightIcon],svg[ph-file-txt-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 118a6 6 0 0 0 6-6V40a2 2 0 0 1 2-2h90v50a6 6 0 0 0 6 6h50v18a6 6 0 0 0 12 0V88a6 6 0 0 0-1.76-4.24l-56-56A6 6 0 0 0 152 26H56a14 14 0 0 0-14 14v72a6 6 0 0 0 6 6m110-71.52L193.52 82H158Zm-5.12 109L135.37 180l17.51 24.51a6 6 0 1 1-9.76 7L128 190.32l-15.12 21.17a6 6 0 0 1-9.76-7L120.63 180l-17.51-24.51a6 6 0 1 1 9.76-7L128 169.68l15.12-21.17a6 6 0 0 1 9.76 7ZM90 152a6 6 0 0 1-6 6H70v50a6 6 0 0 1-12 0v-50H44a6 6 0 0 1 0-12h40a6 6 0 0 1 6 6m128 0a6 6 0 0 1-6 6h-14v50a6 6 0 0 1-12 0v-50h-14a6 6 0 0 1 0-12h40a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhFileTxtLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
