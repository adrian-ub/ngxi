import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsEllipsisHorizontalCircleOutlineIcon],svg[famicons-ellipsis-horizontal-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="256" r="26" fill="currentColor"></svg:circle><svg:circle cx="346" cy="256" r="26" fill="currentColor"></svg:circle><svg:circle cx="166" cy="256" r="26" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"></svg:path>`,
})
export class FamiconsEllipsisHorizontalCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
