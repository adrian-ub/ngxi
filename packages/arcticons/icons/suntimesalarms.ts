import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSuntimesalarmsIcon],svg[arcticons-suntimesalarms-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="10" height="5" x="2.7" y="5.27" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1" transform="rotate(-44.72 7.703 7.773)"></svg:rect><svg:rect width="5" height="10" x="37.58" y="2.77" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1" transform="rotate(-45.28 40.074 7.778)"></svg:rect><svg:circle cx="24" cy="24" r="18.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 24h37M24 5.5V24"></svg:path>`,
})
export class ArcticonsSuntimesalarmsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
