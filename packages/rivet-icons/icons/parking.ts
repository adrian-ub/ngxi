import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsParkingIcon],svg[rivet-icons-parking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9 4H5v8h2v-2h2a3 3 0 1 0 0-6m0 4H7V6h2a1 1 0 0 1 0 2"></svg:path><svg:path d="M15 1H1v14h14zM3 13V3h10v10z"></svg:path></svg:g>`,
})
export class RivetIconsParkingIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
