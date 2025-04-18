import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteFaceGrinStarsOutlineIcon],svg[flowbite-face-grin-stars-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 13c0 2.038-2.239 4.5-5 4.5S7 15.038 7 13c0 1.444 10 1.444 10 0"></svg:path><svg:path fill="currentColor" d="m9 6.811l.618 1.253l1.382.2l-1 .975l.236 1.377L9 9.966l-1.236.65L8 9.239l-1-.975l1.382-.2zm6 0l.618 1.253l1.382.2l-1 .975l.236 1.377L15 9.966l-1.236.65L14 9.239l-1-.975l1.382-.2z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m9 6.811l.618 1.253l1.382.2l-1 .975l.236 1.377L9 9.966l-1.236.65L8 9.239l-1-.975l1.382-.2zm6 0l.618 1.253l1.382.2l-1 .975l.236 1.377L15 9.966l-1.236.65L14 9.239l-1-.975l1.382-.2z"></svg:path></svg:g>`,
})
export class FlowbiteFaceGrinStarsOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
