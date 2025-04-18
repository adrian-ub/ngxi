import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsBedIcon],svg[pixelarticons-bed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 4h2v12h10V8h10v2h-8v6h8v-6h2v10h-2v-2H2v2H0zm3 5h2v4H3zm6 4v2H5v-2zm0-4h2v4H9zm0 0H5V7h4z"></svg:path>`,
})
export class PixelarticonsBedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
