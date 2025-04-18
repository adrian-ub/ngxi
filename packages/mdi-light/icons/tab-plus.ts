import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightTabPlusIcon],svg[mdi-light-tab-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 4h11a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3m0 1a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-8h-8V5zm13 2a2 2 0 0 0-2-2h-5v4h7zM8 18v-2H6v-1h2v-2h1v2h2v1H9v2z"></svg:path>`,
})
export class MdiLightTabPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
