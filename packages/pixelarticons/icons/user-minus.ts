import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsUserMinusIcon],svg[pixelarticons-user-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2h6v2h-6v6h-2V4h2zm0 8h6v2h-6zm8-6h-2v6h2zM9 16H7v6h16v-6h-2v4H9zh12v-2H9zm-2-6H1v2h6z"></svg:path>`,
})
export class PixelarticonsUserMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
