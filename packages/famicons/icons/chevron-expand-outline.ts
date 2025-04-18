import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsChevronExpandOutlineIcon],svg[famicons-chevron-expand-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m136 208l120-104l120 104m-240 96l120 104l120-104"></svg:path>`,
})
export class FamiconsChevronExpandOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
