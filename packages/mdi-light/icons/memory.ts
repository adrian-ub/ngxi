import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightMemoryIcon],svg[mdi-light-memory-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 19a3 3 0 0 1-3-3v-1H3v-1h2v-3H3v-1h2V9a3 3 0 0 1 3-3h1V4h1v2h3V4h1v2h1a3 3 0 0 1 3 3v1h2v1h-2v3h2v1h-2v1a3 3 0 0 1-3 3h-1v2h-1v-2h-3v2H9v-2zM8 7a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zm1 8v-5h5v5zm1-4v3h3v-3z"></svg:path>`,
})
export class MdiLightMemoryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
