import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsReorderTwoOutlineIcon],svg[famicons-reorder-two-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M112 304h288m-288-96h288"></svg:path>`,
})
export class FamiconsReorderTwoOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
