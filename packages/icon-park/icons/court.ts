import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCourtIcon],svg[icon-park-court-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 36H44V12H4V36H24ZM24 36V28M24 12V20"></svg:path><svg:circle cx="24" cy="24" r="4"></svg:circle><svg:path d="M11 24C11 26.2091 9.20914 28 7 28H4V20H7C9.20914 20 11 21.7909 11 24Z"></svg:path><svg:path d="M37 24C37 26.2091 38.7909 28 41 28H44V20H41C38.7909 20 37 21.7909 37 24Z"></svg:path></svg:g>`,
})
export class IconParkCourtIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
