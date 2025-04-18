import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsImageMultipleIcon],svg[pixelarticons-image-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 2H4v16h20zM6 16V4h16v12zM2 4H0v18h20v-2H2zm12 2h2v2h-2zm-2 4V8h2v2zm-2 2v-2h2v2zm0 0v2H8v-2zm8-2h-2V8h2zm0 0h2v2h-2zM8 6h2v2H8z"></svg:path>`,
})
export class PixelarticonsImageMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
