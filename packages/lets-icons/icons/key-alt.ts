import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsKeyAltIcon],svg[lets-icons-key-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path d="M3 7c0-1.4 0-2.1.272-2.635a2.5 2.5 0 0 1 1.093-1.093C4.9 3 5.6 3 7 3h10c1.4 0 2.1 0 2.635.272a2.5 2.5 0 0 1 1.092 1.093C21 4.9 21 5.6 21 7v10c0 1.4 0 2.1-.273 2.635a2.5 2.5 0 0 1-1.092 1.092C19.1 21 18.4 21 17 21H7c-1.4 0-2.1 0-2.635-.273a2.5 2.5 0 0 1-1.093-1.092C3 19.1 3 18.4 3 17z"></svg:path><svg:circle cx="8" cy="12" r="2"></svg:circle><svg:path stroke-linecap="round" d="M10 12h4m3 2v-1.85a.15.15 0 0 0-.15-.15H14m0 0v2"></svg:path></svg:g>`,
})
export class LetsIconsKeyAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
