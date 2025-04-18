import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsStructureLightIcon],svg[lets-icons-structure-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:rect width="16" height="7" x="4" y="4" rx="1"></svg:rect><svg:path d="M4 16c0-.943 0-1.414.293-1.707S5.057 14 6 14h4v4c0 .943 0 1.414-.293 1.707S8.943 20 8 20H6c-.943 0-1.414 0-1.707-.293S4 18.943 4 18zm10-2h4c.943 0 1.414 0 1.707.293S20 15.057 20 16v2c0 .943 0 1.414-.293 1.707S18.943 20 18 20h-2c-.943 0-1.414 0-1.707-.293S14 18.943 14 18z"></svg:path></svg:g>`,
})
export class LetsIconsStructureLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
