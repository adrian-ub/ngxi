import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteSuperscriptOutlineIcon],svg[flowbite-superscript-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 10h-4v-.5C17.099 8.467 19.75 7 19.75 6V5a1 1 0 0 0-1-1H17a1 1 0 0 0-1 1M4 7.303l9.122 11.394m0-11.394L4 18.697"></svg:path>`,
})
export class FlowbiteSuperscriptOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
