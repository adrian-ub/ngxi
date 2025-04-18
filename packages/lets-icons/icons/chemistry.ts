import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsChemistryIcon],svg[lets-icons-chemistry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m11 7l2 3l-2 3H8l-2-3l2-3z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m16 4l2 3l-2 3h-3l-2-3l2-3zm0 12l2 3M5 4l3 3m0 6l-2 2m7 1l-2 2m-5-8H4m14 3h3m-5-3l2 3l-2 3h-3l-2-3l2-3z"></svg:path><svg:circle cx="9" cy="20" r="1" fill="currentColor"></svg:circle><svg:circle cx="4" cy="17" r="1" fill="currentColor"></svg:circle><svg:circle cx="21" cy="7" r="1" fill="currentColor"></svg:circle></svg:g>`,
})
export class LetsIconsChemistryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
