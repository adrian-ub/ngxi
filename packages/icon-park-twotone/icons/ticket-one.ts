import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneTicketOneIcon],svg[icon-park-twotone-ticket-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTTicketOne0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-width="4"><svg:path fill="#555" stroke-linejoin="round" d="M4 8h7s1 5 6 5s6-5 6-5h21v32H23s-1-5-6-5s-6 5-6 5H4z"></svg:path><svg:path d="M17 19v2m0 6v2m8-8h11m-11 6h11"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTTicketOne0)"></svg:path>`,
})
export class IconParkTwotoneTicketOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
