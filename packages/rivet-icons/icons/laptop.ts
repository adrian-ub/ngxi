import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsLaptopIcon],svg[rivet-icons-laptop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6h1v6H0V9h1zm1 8v2h12v-2h-2v1H4v-1zm4-1h4V9h3V3H3v6h3z"></svg:path>`,
})
export class RivetIconsLaptopIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
