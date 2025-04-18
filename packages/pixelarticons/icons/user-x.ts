import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsUserXIcon],svg[pixelarticons-user-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2h6v2h-6v6h-2V4h2zm0 8h6v2h-6zm8-6h-2v6h2zM7 16v6h16v-6h-2v4H9v-4h12v-2H9v2zm-1-6H4V8H2v2h2v2H2v2h2v-2h2v2h2v-2H6zm0 0h2V8H6z"></svg:path>`,
})
export class PixelarticonsUserXIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
