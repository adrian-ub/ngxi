import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsLaptopSolidIcon],svg[rivet-icons-laptop-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1a2 2 0 0 0-2 2v6H0v6h16V9h-1V3a2 2 0 0 0-2-2zM2 13v-2h2v1h8v-1h2v2z"></svg:path>`,
})
export class RivetIconsLaptopSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
