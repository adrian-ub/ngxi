import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightWineBarOutlineIcon],svg[material-symbols-light-wine-bar-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.692 20v-1H11.5v-4.523q-2.15-.33-3.383-1.875T6.884 9V4h10.232v5q0 2.058-1.233 3.602T12.5 14.477V19h2.808v1zM12 13.5q1.573 0 2.739-1.158T16.08 9.5H7.919q.177 1.685 1.343 2.842T12 13.5m-4.115-5h8.23V5h-8.23zm4.115 5"></svg:path>`,
})
export class MaterialSymbolsLightWineBarOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
