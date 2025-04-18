import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phFileArchiveLightIcon],svg[ph-file-archive-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m212.24 83.76l-56-56A6 6 0 0 0 152 26H56a14 14 0 0 0-14 14v176a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14V88a6 6 0 0 0-1.76-4.24M158 46.48L193.52 82H158ZM200 218h-90v-20h10a6 6 0 0 0 0-12h-10v-20h10a6 6 0 0 0 0-12h-10v-20h10a6 6 0 0 0 0-12h-10v-10a6 6 0 0 0-12 0v10H88a6 6 0 0 0 0 12h10v20H88a6 6 0 0 0 0 12h10v20H88a6 6 0 0 0 0 12h10v20H56a2 2 0 0 1-2-2V40a2 2 0 0 1 2-2h90v50a6 6 0 0 0 6 6h50v122a2 2 0 0 1-2 2"></svg:path>`,
})
export class PhFileArchiveLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
