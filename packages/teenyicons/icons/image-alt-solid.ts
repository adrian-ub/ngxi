import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsImageAltSolidIcon],svg[teenyicons-image-alt-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 4h-1V3h1z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M0 1.5A1.5 1.5 0 0 1 1.5 0h12A1.5 1.5 0 0 1 15 1.5v12.01A1.5 1.5 0 0 1 13.5 15h-12A1.5 1.5 0 0 1 0 13.5zm14 6.787l-2.5-2.498l-2.959 2.956L4.5 3.696L1 8.074V1.5a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 .5.5z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsImageAltSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
