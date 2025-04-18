import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsArtTextIcon],svg[pixelarticons-art-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 7h10v10H2zm8 8V9H4v6zm12-8h-8v2h8zm-8 4h8v2h-8zm8 4h-8v2h8z"></svg:path>`,
})
export class PixelarticonsArtTextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
