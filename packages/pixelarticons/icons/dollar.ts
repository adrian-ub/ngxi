import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsDollarIcon],svg[pixelarticons-dollar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 2h2v4h6v2H7v3H5V6h6zM5 18h6v4h2v-4h6v-2H5zm14-7H5v2h12v3h2z"></svg:path>`,
})
export class PixelarticonsDollarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
