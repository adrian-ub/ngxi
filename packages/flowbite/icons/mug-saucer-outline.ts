import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteMugSaucerOutlineIcon],svg[flowbite-mug-saucer-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 8h2a2 2 0 1 1 0 4h-2.5M5 19h11M5 6l.64 6.398A4 4 0 0 0 9.62 16h.76a4 4 0 0 0 3.98-3.602L15 6z"></svg:path>`,
})
export class FlowbiteMugSaucerOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
