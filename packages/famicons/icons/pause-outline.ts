import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsPauseOutlineIcon],svg[famicons-pause-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M176 96h16v320h-16zm144 0h16v320h-16z"></svg:path>`,
})
export class FamiconsPauseOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
