import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinGridBevelIcon],svg[vaadin-grid-bevel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2V1H1v13h1v1h13V2zM5 13H2v-3h3zm0-4H2V6h3zm0-4H2V2h3zm4 8H6v-3h3zm0-4H6V6h3zm0-4H6V2h3zm4 8h-3v-3h3zm0-4h-3V6h3zm0-4h-3V2h3z"></svg:path>`,
})
export class VaadinGridBevelIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
