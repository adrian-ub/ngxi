import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsWindIcon],svg[pixelarticons-wind-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3H8v2h4v2H2v2h12V3zm10 8V7h-6v2h4v2H2v2h20zM2 17v-2h14v6h-6v-2h4v-2z"></svg:path>`,
})
export class PixelarticonsWindIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
