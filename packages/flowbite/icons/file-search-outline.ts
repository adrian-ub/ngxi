import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteFileSearchOutlineIcon],svg[flowbite-file-search-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 3v4a1 1 0 0 1-1 1H5m8 7.5l2.5 2.5M19 4v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1m-5 9.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></svg:path>`,
})
export class FlowbiteFileSearchOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
