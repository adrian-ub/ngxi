import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLegendsOfRunterraIcon],svg[arcticons-legends-of-runterra-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.588 31.914V12.5h4.67c2.639 0 4.78 2.145 4.78 4.79s-2.14 4.79-4.78 4.79h-4.67m4.669 0l4.669 9.831m-1.886 0h2.745m-11.57 0h2.745M18.215 12.5h1.373m-5.489 23.283h6.668L24 37.5l3.234-1.717h6.667"></svg:path><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsLegendsOfRunterraIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
