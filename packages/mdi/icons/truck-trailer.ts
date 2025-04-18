import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTruckTrailerIcon],svg[mdi-truck-trailer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 15v2H10a3 3 0 0 1-3 3a3 3 0 0 1-3-3H2V6a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v9zM7 16a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1"></svg:path>`,
})
export class MdiTruckTrailerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
