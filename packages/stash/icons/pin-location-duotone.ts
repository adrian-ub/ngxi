import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashPinLocationDuotoneIcon],svg[stash-pin-location-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.243 15.897a.75.75 0 0 1-.64.846a17.14 17.14 0 0 0-7.186 2.74a.75.75 0 1 1-.834-1.247a18.65 18.65 0 0 1 7.814-2.979a.75.75 0 0 1 .846.64m3.514 0a.75.75 0 0 1 .846-.64a18.65 18.65 0 0 1 7.814 2.979a.75.75 0 0 1-.834 1.246a17.14 17.14 0 0 0-7.186-2.74a.75.75 0 0 1-.64-.845" opacity=".5"></svg:path><svg:path fill="currentColor" d="M7.25 8a4.75 4.75 0 1 1 5.5 4.691V19a.75.75 0 0 1-1.5 0v-6.309A4.75 4.75 0 0 1 7.25 8M12 4.75a3.25 3.25 0 1 0 2.98 1.949a2.25 2.25 0 0 1-2.714-1.938A3 3 0 0 0 12 4.75"></svg:path>`,
})
export class StashPinLocationDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
