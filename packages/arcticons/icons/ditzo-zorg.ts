import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDitzoZorgIcon],svg[arcticons-ditzo-zorg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 5.5a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 28.46V18.121h2.326a4.523 4.523 0 0 1 4.524 4.524v1.292a4.523 4.523 0 0 1-4.524 4.523z"></svg:path><svg:rect width="5.17" height="6.85" x="33.331" y="21.611" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.585" ry="2.585"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.111 21.611h5.169l-5.169 6.849h5.169"></svg:path><svg:circle cx="19.247" cy="18.444" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.247 21.611v6.849m4.002-8.982v8.982m-1.357-6.849h1.34"></svg:path>`,
})
export class ArcticonsDitzoZorgIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
