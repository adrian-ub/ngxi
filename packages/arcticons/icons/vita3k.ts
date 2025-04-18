import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsVita3kIcon],svg[arcticons-vita3k-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="39.77" height="18.081" x="4.115" y="14.96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="7.708" ry="7.708" transform="rotate(-21.909 24 24)"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m10.327 21.647l21.91-8.811l5.13 12.756l-21.91 8.811z"></svg:path><svg:circle cx="39.355" cy="14.847" r=".75" fill="currentColor"></svg:circle><svg:circle cx="36.239" cy="16.1" r=".75" fill="currentColor"></svg:circle><svg:circle cx="38.423" cy="17.031" r=".75" fill="currentColor"></svg:circle><svg:circle cx="37.171" cy="13.916" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m6.479 28.086l.614-.246m2.022-.814l.614-.247m-2.279-.971l.247.614m.813 2.022l.247.614"></svg:path><svg:circle cx="10.813" cy="31.526" r="1.243" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="38.616" cy="20.344" r="1.243" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsVita3kIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
