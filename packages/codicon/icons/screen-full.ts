import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconScreenFullIcon],svg[codicon-screen-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 12h10V4H3zm2-6h6v4H5zM2 6H1V2.5l.5-.5H5v1H2zm13-3.5V6h-1V3h-3V2h3.5zM14 10h1v3.5l-.5.5H11v-1h3zM2 13h3v1H1.5l-.5-.5V10h1z"></svg:path>`,
})
export class CodiconScreenFullIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
