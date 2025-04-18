import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteArrowUpFromBracketOutlineIcon],svg[flowbite-arrow-up-from-bracket-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2M12 4v12m0-12l4 4m-4-4L8 8"></svg:path>`,
})
export class FlowbiteArrowUpFromBracketOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
