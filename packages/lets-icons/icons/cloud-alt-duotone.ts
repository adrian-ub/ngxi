import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsCloudAltDuotoneIcon],svg[lets-icons-cloud-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" fill-rule="evenodd" d="M10.528 8A6 6 0 1 1 15 18H8A5 5 0 0 1 8 8z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m10.528 8l.447.4l-.179.2h-.268zM15 6.6c-1.6 0-3.036.694-4.025 1.8l-.894-.8A6.6 6.6 0 0 1 15 5.4zm5.4 5.4A5.4 5.4 0 0 0 15 6.6V5.4a6.6 6.6 0 0 1 6.6 6.6zM15 17.4a5.4 5.4 0 0 0 5.4-5.4h1.2a6.6 6.6 0 0 1-6.6 6.6zm-7 0h7v1.2H8zM3.6 13A4.4 4.4 0 0 0 8 17.4v1.2A5.6 5.6 0 0 1 2.4 13zM8 8.6A4.4 4.4 0 0 0 3.6 13H2.4A5.6 5.6 0 0 1 8 7.4zm2.528 0H8V7.4h2.528z"></svg:path><svg:path stroke="currentColor" stroke-width="1.2" d="M16.318 17.854A6 6 0 1 0 9 12.024"></svg:path></svg:g>`,
})
export class LetsIconsCloudAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
