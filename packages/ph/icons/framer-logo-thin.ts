import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phFramerLogoThinIcon],svg[ph-framer-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204 104V40a4 4 0 0 0-4-4H56a4 4 0 0 0-2.66 7l64.14 57H56a4 4 0 0 0-4 4v64a4 4 0 0 0 1.17 2.83l72 72A4 4 0 0 0 132 240v-68h68a4 4 0 0 0 2.66-7l-64.14-57H200a4 4 0 0 0 4-4m-14.52 60H128a4 4 0 0 0-4 4v62.34l-64-64V108h66.48Zm6.52-64h-66.48l-63-56H196Z"></svg:path>`,
})
export class PhFramerLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
