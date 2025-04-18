import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsStructureIcon],svg[lets-icons-structure-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:rect width="16" height="5" x="4" y="4" rx="1"></svg:rect><svg:path d="M4 17c0-.943 0-1.414.293-1.707S5.057 15 6 15h3v3c0 .943 0 1.414-.293 1.707S7.943 20 7 20H6c-.943 0-1.414 0-1.707-.293S4 18.943 4 18zm11-2h3c.943 0 1.414 0 1.707.293S20 16.057 20 17v1c0 .943 0 1.414-.293 1.707S18.943 20 18 20h-1c-.943 0-1.414 0-1.707-.293S15 18.943 15 18z"></svg:path></svg:g>`,
})
export class LetsIconsStructureIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
