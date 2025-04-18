import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteArrowSortLettersSolidIcon],svg[flowbite-arrow-sort-letters-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><svg:path d="M7 5v15"></svg:path><svg:path stroke-linejoin="round" d="M10 7L7 4L4 7m9-3h6l-6 6h6m-6.5 10l3.5-7l3.5 7M14 18h4"></svg:path></svg:g>`,
})
export class FlowbiteArrowSortLettersSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
