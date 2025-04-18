import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidIpoIcon],svg[icon-park-solid-ipo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSIpo0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M4 18.313V7h40v11.313a5.5 5.5 0 0 0-3.636 5.187A5.5 5.5 0 0 0 44 28.687V40H4V28.687A5.5 5.5 0 0 0 7.636 23.5A5.5 5.5 0 0 0 4 18.313Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M13 18v11m5-11v11"></svg:path><svg:path fill="#000" stroke="#000" d="M18 18h3a3 3 0 1 1 0 6h-3z"></svg:path><svg:ellipse cx="32" cy="24" fill="#000" stroke="#000" rx="3" ry="5"></svg:ellipse></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSIpo0)"></svg:path>`,
})
export class IconParkSolidIpoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
