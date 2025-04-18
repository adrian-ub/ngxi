import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteorIconsPaletteIcon],svg[meteor-icons-palette-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="14" cy="7" r=".5"></svg:circle><svg:circle cx="9" cy="8" r=".5"></svg:circle><svg:circle cx="7" cy="13" r=".5"></svg:circle><svg:path d="M12 22a10 10 0 1 1 10-10q0 4-5 4t-4 3t-1 3"></svg:path></svg:g>`,
})
export class MeteorIconsPaletteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
