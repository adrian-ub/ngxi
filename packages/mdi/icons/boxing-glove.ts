import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBoxingGloveIcon],svg[mdi-boxing-glove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 16V6h3v10zM12 4H7S2 4 2 8v6c0 1.77 1 2.76 2.07 3.31A3.996 3.996 0 0 1 8 14h3v2H8a2 2 0 0 0-2 2a2 2 0 0 0 2 2h5c4 0 4-4 4-4V6s-1-2-5-2"></svg:path>`,
})
export class MdiBoxingGloveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
