import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBgammonIcon],svg[arcticons-bgammon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="26.217" cy="29.622" r=".75" fill="currentColor"></svg:circle><svg:circle cx="32.91" cy="29.626" r=".75" fill="currentColor"></svg:circle><svg:circle cx="26.213" cy="34.185" r=".75" fill="currentColor"></svg:circle><svg:circle cx="32.907" cy="34.189" r=".75" fill="currentColor"></svg:circle><svg:circle cx="26.211" cy="38.753" r=".75" fill="currentColor"></svg:circle><svg:circle cx="32.904" cy="38.758" r=".75" fill="currentColor"></svg:circle><svg:rect width="16.62" height="16.62" x="21.251" y="25.88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.108" ry="1.108"></svg:rect><svg:circle cx="15.095" cy="9.242" r=".75" fill="currentColor"></svg:circle><svg:circle cx="21.789" cy="9.247" r=".75" fill="currentColor"></svg:circle><svg:circle cx="15.092" cy="13.805" r=".75" fill="currentColor"></svg:circle><svg:circle cx="21.785" cy="13.81" r=".75" fill="currentColor"></svg:circle><svg:circle cx="15.089" cy="18.374" r=".75" fill="currentColor"></svg:circle><svg:circle cx="21.782" cy="18.378" r=".75" fill="currentColor"></svg:circle><svg:rect width="16.62" height="16.62" x="10.129" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.108" ry="1.108"></svg:rect>`,
})
export class ArcticonsBgammonIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
