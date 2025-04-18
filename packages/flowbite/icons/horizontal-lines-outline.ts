import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteHorizontalLinesOutlineIcon],svg[flowbite-horizontal-lines-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round"><svg:path stroke-width="2" d="M5 12h14"></svg:path><svg:path d="M6 9.5h12m-12-2h12m-12-2h12m-12 13h12m-12-2h12m-12-2h12"></svg:path></svg:g>`,
})
export class FlowbiteHorizontalLinesOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
