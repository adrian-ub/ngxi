import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiVectorSelectionIcon],svg[mdi-vector-selection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1h2v2H3v2H1V3a2 2 0 0 1 2-2m11 0a2 2 0 0 1 2 2v2h-2V3h-2V1zm6 6a2 2 0 0 1 2 2v2h-2V9h-2V7zm2 13a2 2 0 0 1-2 2h-2v-2h2v-2h2zm-2-7h2v3h-2zm-7-4V7h3v3h-2V9zm0 13v-2h3v2zm-4 0a2 2 0 0 1-2-2v-2h2v2h2v2zm-2-6v-3h2v1h1v2zM7 3V1h3v2zM3 16a2 2 0 0 1-2-2v-2h2v2h2v2zM1 7h2v3H1zm8 0h2v2H9v2H7V9a2 2 0 0 1 2-2m7 7a2 2 0 0 1-2 2h-2v-2h2v-2h2z"></svg:path>`,
})
export class MdiVectorSelectionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
