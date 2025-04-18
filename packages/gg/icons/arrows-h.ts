import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggArrowsHIcon],svg[gg-arrows-h-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.657 9.172L4.243 7.757L0 12l4.243 4.243l1.414-1.415L3.829 13H10v-2H3.83zM14 11v2h6.172l-1.829 1.828l1.414 1.415L24 12l-4.243-4.243l-1.414 1.415L20.172 11z"></svg:path>`,
})
export class GgArrowsHIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
