import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsExpandIcon],svg[pixelarticons-expand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 5h2v2h2v2h2V7h-2V5h-2V3h-2zM9 7V5h2v2zm0 0v2H7V7zm-5 6h16v-2H4zm9 6h-2v-2H9v-2H7v2h2v2h2v2h2zm2-2h-2v2h2zm0 0h2v-2h-2z"></svg:path>`,
})
export class PixelarticonsExpandIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
