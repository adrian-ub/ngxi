import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteArrowsRepeatOutlineIcon],svg[flowbite-arrows-repeat-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m16 10l3-3m0 0l-3-3m3 3H5v3m3 4l-3 3m0 0l3 3m-3-3h14v-3"></svg:path>`,
})
export class FlowbiteArrowsRepeatOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
