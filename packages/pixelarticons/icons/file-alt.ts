import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsFileAltIcon],svg[pixelarticons-file-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 22H3V2h12v2h2v2h2v2h2zM17 6h-2v2h2zM5 4v16h14V10h-6V4zm8 12H7v2h6zm-6-4h10v2H7zm4-4H7v2h4z"></svg:path>`,
})
export class PixelarticonsFileAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
