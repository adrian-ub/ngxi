import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiCropIcon],svg[oi-crop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 0v1H0v1h1v5h5v1h1V7h1V6H7V1.5l1-1l-.5-.5l-1 1H2V0zm1 2h3.5L2 5.5zm4 .5V6H2.5z"></svg:path>`,
})
export class OiCropIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
