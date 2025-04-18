import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarSortVerticalLineDuotoneIcon],svg[solar-sort-vertical-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M16 18V6m0 0l4 4.125M16 6l-4 4.125" opacity=".5"></svg:path><svg:path d="M8 6v12m0 0l4-4.125M8 18l-4-4.125"></svg:path></svg:g>`,
})
export class SolarSortVerticalLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
