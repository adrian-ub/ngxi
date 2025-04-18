import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsPillIcon],svg[majesticons-pill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.929 19.071a5 5 0 0 1 0-7.071l2.828-2.828l7.071 7.07L12 19.073a5 5 0 0 1-7.071 0zm11.314-4.243L19.07 12A5 5 0 0 0 12 4.929L9.172 7.757z" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsPillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
