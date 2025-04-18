import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiGardenIcon],svg[maki-garden-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 8c0 3.31-2.19 6-5.5 6S2 11.31 2 8a5.33 5.33 0 0 1 5 3.61V7H4.5A1.5 1.5 0 0 1 3 5.5v-3a.5.5 0 0 1 .9-.3l1.53 2l1.65-3a.5.5 0 0 1 .84 0l1.65 3l1.53-2a.5.5 0 0 1 .9.3v3A1.5 1.5 0 0 1 10.5 7H8v4.61A5.33 5.33 0 0 1 13 8"></svg:path>`,
})
export class MakiGardenIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
