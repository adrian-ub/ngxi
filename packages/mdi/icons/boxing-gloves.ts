import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBoxingGlovesIcon],svg[mdi-boxing-gloves-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M19 16V6h3v10h-3zM12 4H7S2 4 2 8v6c0 1.772.979 2.757 2.07 3.306A4 4 0 0 1 8 14h3v2H8a2 2 0 1 0 0 4h5c4 0 4-4 4-4V6s-1-2-5-2z" fill="currentColor"></svg:path>`,
})
export class MdiBoxingGlovesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
