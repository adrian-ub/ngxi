import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineWhirlwindIcon],svg[icon-park-outline-whirlwind-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 29a5 5 0 1 0 0-10a5 5 0 0 0 0 10"></svg:path><svg:path d="M23.5 44C16.596 44 11 38.404 11 31.5S16.596 19 23.5 19"></svg:path><svg:path d="M44 23.5C44 30.404 38.404 36 31.5 36S19 30.404 19 23.5"></svg:path><svg:path d="M23.5 29C30.404 29 36 23.404 36 16.5S30.404 4 23.5 4"></svg:path><svg:path d="M29 23.5C29 16.596 23.404 11 16.5 11S4 16.596 4 23.5"></svg:path></svg:g>`,
})
export class IconParkOutlineWhirlwindIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
