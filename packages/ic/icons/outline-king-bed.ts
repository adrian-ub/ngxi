import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineKingBedIcon],svg[ic-outline-king-bed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12c0-1.1-.9-2-2-2V7c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v3c-1.1 0-2 .9-2 2v5h1.33L4 19h1l.67-2h12.67l.66 2h1l.67-2H22zm-4-2h-5V7h5zM6 7h5v3H6zm-2 5h16v3H4z"></svg:path>`,
})
export class IcOutlineKingBedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
