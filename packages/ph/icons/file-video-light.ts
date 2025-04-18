import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phFileVideoLightIcon],svg[ph-file-video-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m212.24 83.76l-56-56A6 6 0 0 0 152 26H56a14 14 0 0 0-14 14v72a6 6 0 0 0 12 0V40a2 2 0 0 1 2-2h90v50a6 6 0 0 0 6 6h50v122a2 2 0 0 1-2 2h-8a6 6 0 0 0 0 12h8a14 14 0 0 0 14-14V88a6 6 0 0 0-1.76-4.24M158 46.48L193.52 82H158Zm-3.09 100.27a6 6 0 0 0-6.09.16L126 161.17V160a14 14 0 0 0-14-14H48a14 14 0 0 0-14 14v48a14 14 0 0 0 14 14h64a14 14 0 0 0 14-14v-1.17l22.82 14.26A6 6 0 0 0 158 216v-64a6 6 0 0 0-3.09-5.25M114 208a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2v-48a2 2 0 0 1 2-2h64a2 2 0 0 1 2 2Zm32-2.83l-20-12.5v-17.34l20-12.5Z"></svg:path>`,
})
export class PhFileVideoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
