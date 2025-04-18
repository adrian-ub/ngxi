import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsParkingSolidIcon],svg[rivet-icons-parking-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9 8H7V6h2a1 1 0 0 1 0 2"></svg:path><svg:path d="M1 1h14v14H1zm8 3H5v8h2v-2h2a3 3 0 1 0 0-6"></svg:path></svg:g>`,
})
export class RivetIconsParkingSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
