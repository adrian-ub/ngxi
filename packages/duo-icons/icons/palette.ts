import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[duoIconsPaletteIcon],svg[duo-icons-palette-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" class="duoicon-secondary-layer" opacity=".3"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M13.636 4a2 2 0 0 1 2.701-.117l.127.117L20 7.536a2 2 0 0 1 .204 2.589L13 17.357V4.636zM7.5 15a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3" class="duoicon-primary-layer"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M19.66 12.111c.731.256 1.27.924 1.334 1.727L21 19a2 2 0 0 1-1.85 1.995L19 21h-6v-2.23z" class="duoicon-secondary-layer" opacity=".3"></svg:path>`,
})
export class DuoIconsPaletteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
