import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsMapIcon],svg[pixelarticons-map-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2h2v2h2v2h-2v10H8V6H6V4h2zM4 8V6h2v2zm2 10v2H4v2H2V8h2v10zm0 0h2v-2H6zm6 0h-2v-2h2zm2-10V6h-2v2zm2 0h-2v10h-2v2h2v2h2v-2h2v-2h2v-2h2V2h-2v2h-2v2h-2zm0 0h2V6h2v10h-2v2h-2z"></svg:path>`,
})
export class PixelarticonsMapIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
