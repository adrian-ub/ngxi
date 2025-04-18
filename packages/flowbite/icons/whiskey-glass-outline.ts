import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteWhiskeyGlassOutlineIcon],svg[flowbite-whiskey-glass-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 14h10M6 7l.847 10.166A2 2 0 0 0 8.84 19h6.32a2 2 0 0 0 1.993-1.834L18 7z"></svg:path>`,
})
export class FlowbiteWhiskeyGlassOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
