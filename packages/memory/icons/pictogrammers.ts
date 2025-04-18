import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryPictogrammersIcon],svg[memory-pictogrammers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0h14v1h1v1h1v18h-1v1h-1v1H4v-1H3v-1H2V2h1V1h1zm0 18v1h1v1h12v-1h1v-1zM17 2H5v1H4v12h1v1h12v-1h1V3h-1zm-4 2v1h1v1h1v2h-1v1h-1v1h-3v4H8V4zm-1 2h-2v2h2z"></svg:path>`,
})
export class MemoryPictogrammersIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
