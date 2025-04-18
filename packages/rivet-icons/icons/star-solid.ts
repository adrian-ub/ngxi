import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsStarSolidIcon],svg[rivet-icons-star-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.231 5.345L8 .684l-2.231 4.66l-5.628.266l4.18 4.04l-1.337 5.254L8 12.324l5.016 2.58L11.68 9.65l4.18-4.04z"></svg:path>`,
})
export class RivetIconsStarSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
