import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFreifunkKarteIcon],svg[arcticons-freifunk-karte-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="29.741" cy="24" r="13.759" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="13.427" cy="28.218" r="8.927" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m28.967 29.366l-2.986-2.987l2.986-2.986m-2.986 2.987h8.734m-23.666-1.987l1.966 1.966l-1.966 1.965m1.966-1.965H8.373"></svg:path>`,
})
export class ArcticonsFreifunkKarteIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
