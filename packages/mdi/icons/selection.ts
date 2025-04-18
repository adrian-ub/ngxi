import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSelectionIcon],svg[mdi-selection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4a2 2 0 0 1 2-2h3v2H4v3H2zm20 0v3h-2V4h-3V2h3a2 2 0 0 1 2 2m-2 16v-3h2v3a2 2 0 0 1-2 2h-3v-2zM2 20v-3h2v3h3v2H4a2 2 0 0 1-2-2m8-18h4v2h-4zm0 18h4v2h-4zm10-10h2v4h-2zM2 10h2v4H2z"></svg:path>`,
})
export class MdiSelectionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
