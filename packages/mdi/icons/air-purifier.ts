import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiAirPurifierIcon],svg[mdi-air-purifier-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 9a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2M7 4h7a4 4 0 0 1 4 4v1h-2V8a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v12h11v-2h2v4H3V8a4 4 0 0 1 4-4m9 7c2.5 0 2.5-2 5-2v2c-2.5 0-2.5 2-5 2zm0 4c2.5 0 2.5-2 5-2v2c-2.5 0-2.5 2-5 2z"></svg:path>`,
})
export class MdiAirPurifierIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
