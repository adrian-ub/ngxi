import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsUserPlusIcon],svg[pixelarticons-user-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 2h-6v2h-2v6h2V4h6zm0 8h-6v2h6zm0-6h2v6h-2zM7 16h2v-2h12v2H9v4h12v-4h2v6H7zM3 8h2v2h2v2H5v2H3v-2H1v-2h2z"></svg:path>`,
})
export class PixelarticonsUserPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
