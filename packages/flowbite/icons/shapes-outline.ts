import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteShapesOutlineIcon],svg[flowbite-shapes-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M4.071 14v6h6v-6zm4.5-4h7l-3.5-6zm8 10a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7Z"></svg:path>`,
})
export class FlowbiteShapesOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
