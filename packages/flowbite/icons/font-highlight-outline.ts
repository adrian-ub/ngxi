import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteFontHighlightOutlineIcon],svg[flowbite-font-highlight-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9 20H5.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H18m-6-1l1.42 1.893a.1.1 0 0 0 .16 0L15 19m-7-6l3.907-9.768a.1.1 0 0 1 .186 0L16 13m-8 0H7m1 0h1.5m6.5 0h-1.5m1.5 0h1m-7-3h4"></svg:path>`,
})
export class FlowbiteFontHighlightOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
