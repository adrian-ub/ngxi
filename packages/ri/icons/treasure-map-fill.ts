import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riTreasureMapFillIcon],svg[ri-treasure-map-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2 5l7-3l6 3l6.303-2.701a.5.5 0 0 1 .697.46V19l-7 3l-6-3l-6.303 2.701a.5.5 0 0 1-.697-.46zm4 6v2h2v-2zm4 0v2h2v-2zm6-.06l-1.237-1.238l-1.061 1.06L14.939 12l-1.237 1.237l1.06 1.061L16 13.061l1.237 1.237l1.061-1.06L17.061 12l1.237-1.237l-1.06-1.061z"></svg:path>`,
})
export class RiTreasureMapFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
