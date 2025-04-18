import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsTextAddIcon],svg[pixelarticons-text-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 4H3v2h16zm0 4H3v2h16zM3 12h8v2H3zm8 4H3v2h8zm7-1h3v2h-3v3h-2v-3h-3v-2h3v-3h2z"></svg:path>`,
})
export class PixelarticonsTextAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
