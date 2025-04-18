import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCardIdIcon],svg[pixelarticons-card-id-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4h20v16H2zm2 2v4h16V6zm16 6H10v2h10zm0 4h-4v2h4zm-6 2v-2H4v2zM4 14h4v-2H4z"></svg:path>`,
})
export class PixelarticonsCardIdIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
