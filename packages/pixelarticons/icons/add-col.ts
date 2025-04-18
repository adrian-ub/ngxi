import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsAddColIcon],svg[pixelarticons-add-col-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h10v20H2v-2h8v-4H2v-2h8v-4H2V8h8V4H2zm17 9h3v2h-3v3h-2v-3h-3v-2h3V8h2z"></svg:path>`,
})
export class PixelarticonsAddColIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
