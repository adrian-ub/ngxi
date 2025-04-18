import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineWindmillOneIcon],svg[icon-park-outline-windmill-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M34.518 13.846L34 11l-6.87-3.435a7 7 0 0 0-6.26 0L17.38 9.31m18.31 10.996L37 27.5L39.09 39M36 44H8l.956-5.258m1.68-9.242l2.936-16.145"></svg:path><svg:path stroke-linejoin="round" d="M39.293 8.707a1 1 0 0 1 1.414 0l2.586 2.586a1 1 0 0 1 0 1.414l-8.586 8.586a1 1 0 0 1-1.414 0l-2.586-2.586a1 1 0 0 1 0-1.414z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m27 21l4-4"></svg:path><svg:path stroke-linejoin="round" d="M39.293 39.293a1 1 0 0 1 0 1.414l-2.586 2.586a1 1 0 0 1-1.414 0l-8.586-8.586a1 1 0 0 1 0-1.414l2.586-2.586a1 1 0 0 1 1.414 0z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m27 27l4 4"></svg:path><svg:path stroke-linejoin="round" d="M8.707 39.293a1 1 0 0 1-1.414 0l-2.586-2.586a1 1 0 0 1 0-1.414l8.586-8.586a1 1 0 0 1 1.414 0l2.586 2.586a1 1 0 0 1 0 1.414z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m21 27l-4 4"></svg:path><svg:path stroke-linejoin="round" d="M8.707 8.707a1 1 0 0 1 0-1.414l2.586-2.586a1 1 0 0 1 1.414 0l8.586 8.586a1 1 0 0 1 0 1.414l-2.586 2.586a1 1 0 0 1-1.414 0z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m21 21l-4-4"></svg:path><svg:circle cx="24" cy="24" r="4"></svg:circle></svg:g>`,
})
export class IconParkOutlineWindmillOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
