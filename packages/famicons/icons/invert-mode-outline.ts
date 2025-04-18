import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsInvertModeOutlineIcon],svg[famicons-invert-mode-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="256" r="208" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></svg:circle><svg:path fill="currentColor" d="M256 176v160a80 80 0 0 1 0-160m0-128v128a80 80 0 0 1 0 160v128c114.88 0 208-93.12 208-208S370.88 48 256 48"></svg:path>`,
})
export class FamiconsInvertModeOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
