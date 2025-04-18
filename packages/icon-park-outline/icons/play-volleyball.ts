import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlinePlayVolleyballIcon],svg[icon-park-outline-play-volleyball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-miterlimit="2" stroke-width="4" d="M29 14a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z"></svg:path><svg:path fill="currentColor" d="M41 24a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4" d="m16 24l-2.27 11.26a2 2 0 0 1-2.81 1.5L4 34m34-4L23.76 19.07c-.77-.57-1.83-.51-2.54.13l-4.84 4.43a.996.996 0 0 0 .09 1.55L26 32.15c.72.53 1.01 1.48.69 2.32L23.12 44"></svg:path></svg:g>`,
})
export class IconParkOutlinePlayVolleyballIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
