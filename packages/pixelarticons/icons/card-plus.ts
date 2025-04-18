import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCardPlusIcon],svg[pixelarticons-card-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 4H2v16h10v-2H4V6h16v4h2zm-3 13h3v-2h-3v-3h-2v3h-3v2h3v3h2z"></svg:path>`,
})
export class PixelarticonsCardPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
