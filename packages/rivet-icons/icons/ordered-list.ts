import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsOrderedListIcon],svg[rivet-icons-ordered-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 1h3v6H3V3H2zm6 4h7V3H8zm0 8h7v-2H8zM2 9h4v1.236L4.618 13H6v2H2v-1.236L3.382 11H2z"></svg:path>`,
})
export class RivetIconsOrderedListIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
