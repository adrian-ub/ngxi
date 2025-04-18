import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siMoreVertDuotoneIcon],svg[si-more-vert-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M12 13a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 7a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0-14a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5" d="M12 13a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm0 7a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm0-14a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z"></svg:path></svg:g>`,
})
export class SiMoreVertDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
