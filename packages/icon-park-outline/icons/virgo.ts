import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineVirgoIcon],svg[icon-park-outline-virgo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M30 17c4 0 11.088-.112 11.959 6.64C42.417 27.192 39.238 32.674 24 43"></svg:path><svg:path fill="currentColor" d="M16 11a2 2 0 1 0 4 0zM4 11a2 2 0 1 0 4 0zm4 0a4 4 0 0 1 4-4V3a8 8 0 0 0-8 8zm4-4a4 4 0 0 1 4 4h4a8 8 0 0 0-8-8z"></svg:path><svg:path fill="currentColor" d="M28 11a2 2 0 1 0 4 0zm-12 0a2 2 0 1 0 4 0zm4 0a4 4 0 0 1 4-4V3a8 8 0 0 0-8 8zm4-4a4 4 0 0 1 4 4h4a8 8 0 0 0-8-8z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M6 11v18m12-18v18"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="4" d="M30 11v18c0 5 2.5 10 12 10"></svg:path></svg:g>`,
})
export class IconParkOutlineVirgoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
