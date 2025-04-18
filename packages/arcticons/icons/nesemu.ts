import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNesemuIcon],svg[arcticons-nesemu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round"><svg:rect width="41" height="17.662" x="3.5" y="15.169" stroke-linejoin="round" rx="1.109" ry="1.109"></svg:rect><svg:path stroke-linejoin="round" d="M9.361 21.729v2.488h-2.48v2.554h2.48v2.489h2.549v-2.489h2.481v-2.554H11.91V21.73z"></svg:path><svg:ellipse cx="33.446" cy="27.644" stroke-linejoin="round" rx="1.677" ry="1.655" transform="rotate(-88.427 33.446 27.644)"></svg:ellipse><svg:ellipse cx="38.781" cy="27.644" stroke-linejoin="round" rx="1.677" ry="1.655" transform="rotate(-88.427 38.781 27.644)"></svg:ellipse><svg:path stroke-linejoin="round" d="M20.137 27.31h1.854m2.91 0h1.854m-8.707-2.002h10.797v4.003H18.048z"></svg:path><svg:path d="M18.048 23.18h10.797m-10.797-2.844h10.797m-10.797-2.845h10.797m-10.797 13.58h10.797"></svg:path></svg:g>`,
})
export class ArcticonsNesemuIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
