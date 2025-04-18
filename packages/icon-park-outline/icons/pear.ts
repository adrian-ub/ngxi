import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlinePearIcon],svg[icon-park-outline-pear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="4" d="M16.64 12.746a8.081 8.081 0 0 1 14.72 0l3.061 6.754l3.686 6.322a9.88 9.88 0 0 1-1.652 12.063l-1.19 1.156a8.013 8.013 0 0 1-10.634.472a1 1 0 0 0-1.262 0a8.013 8.013 0 0 1-10.634-.472l-1.19-1.156a9.88 9.88 0 0 1-1.652-12.063L13.58 19.5z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="4" d="M21.5 4c.667.5 2.1 1.9 2.5 3.5s.167 3.333 0 4"></svg:path><svg:circle cx="16" cy="28" r="2" fill="currentColor"></svg:circle><svg:circle cx="18" cy="34" r="2" fill="currentColor"></svg:circle><svg:circle cx="23" cy="30" r="2" fill="currentColor"></svg:circle></svg:g>`,
})
export class IconParkOutlinePearIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
