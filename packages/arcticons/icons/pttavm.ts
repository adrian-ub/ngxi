import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPttavmIcon],svg[arcticons-pttavm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.606 27.849v-7.796l3.947 7.894l3.947-7.894v7.894m-35 0v-7.894h2.566c1.48 0 2.664 1.184 2.664 2.664s-1.184 2.665-2.664 2.665H6.5m25.173-5.329l-2.566 7.894l-2.566-7.894m-12.487.987v5.92c0 .592.395.987.987.987h.296m-2.368-5.328h2.17m10.514 2.664h-3.552m-.888 2.664l2.664-7.894l2.664 7.894M17.66 21.04v5.92c0 .592.395.987.987.987h.296m-2.368-5.328h2.171"></svg:path>`,
})
export class ArcticonsPttavmIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
