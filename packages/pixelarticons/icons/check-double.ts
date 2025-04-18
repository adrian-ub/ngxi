import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCheckDoubleIcon],svg[pixelarticons-check-double-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 6h2v2h-2zm-2 4V8h2v2zm-2 2v-2h2v2zm-2 2v-2h2v2zm-2 2v-2h2v2zm-2 0h2v2H5zm-2-2h2v2H3zm0 0H1v-2h2zm8 2h2v2h-2zm4-2v2h-2v-2zm2-2v2h-2v-2zm2-2v2h-2v-2zm2-2h-2v2h2zm0 0h2V6h-2z"></svg:path>`,
})
export class PixelarticonsCheckDoubleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
