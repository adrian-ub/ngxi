import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineComputerOneIcon],svg[icon-park-outline-computer-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="4" d="M10 6a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v36a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M17 12h14"></svg:path><svg:circle cx="17" cy="21" r="2" fill="currentColor"></svg:circle><svg:circle cx="17" cy="27" r="2" fill="currentColor"></svg:circle><svg:circle cx="17" cy="33" r="2" fill="currentColor"></svg:circle><svg:circle cx="24" cy="21" r="2" fill="currentColor"></svg:circle><svg:circle cx="24" cy="27" r="2" fill="currentColor"></svg:circle><svg:circle cx="24" cy="33" r="2" fill="currentColor"></svg:circle><svg:circle cx="31" cy="21" r="2" fill="currentColor"></svg:circle><svg:circle cx="31" cy="27" r="2" fill="currentColor"></svg:circle><svg:circle cx="31" cy="33" r="2" fill="currentColor"></svg:circle></svg:g>`,
})
export class IconParkOutlineComputerOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
