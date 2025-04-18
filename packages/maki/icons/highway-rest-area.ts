import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiHighwayRestAreaIcon],svg[maki-highway-rest-area-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 13h-3V9h3a.5.5 0 0 0 .41-.787L11.66 5h.84a.5.5 0 0 0 .384-.82l-2.5-3a.516.516 0 0 0-.768 0l-2.5 3A.5.5 0 0 0 7.5 5h.84L6.09 8.213A.5.5 0 0 0 6.5 9h3v4H4v-2h1.5a.5.5 0 0 0 0-1h-4a.5.5 0 0 0 0 1H3v2H1.5a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1"></svg:path>`,
})
export class MakiHighwayRestAreaIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
