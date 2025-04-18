import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsColorModeLightIcon],svg[lets-icons-color-mode-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="8.5" stroke="currentColor"></svg:circle><svg:path fill="currentColor" d="M16.243 7.757a6 6 0 1 0-8.486 8.486L12 12z"></svg:path></svg:g>`,
})
export class LetsIconsColorModeLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
