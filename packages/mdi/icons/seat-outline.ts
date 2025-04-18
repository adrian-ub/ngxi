import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSeatOutlineIcon],svg[mdi-seat-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 5v7H9V5zm0-2H9a2 2 0 0 0-2 2v9h10V5a2 2 0 0 0-2-2m7 7h-3v3h3zM5 10H2v3h3zm15 5H4v6h2v-4h12v4h2z"></svg:path>`,
})
export class MdiSeatOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
