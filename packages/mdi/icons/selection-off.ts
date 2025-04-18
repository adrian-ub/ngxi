import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSelectionOffIcon],svg[mdi-selection-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.5 3.77L1.78 2.5L21.5 22.22l-1.27 1.28l-1.5-1.5H17v-1.73L3.73 7H2V5.27zM4 2h3v2H5.82L3.83 2zm18 2v3h-2V4h-3V2h3a2 2 0 0 1 2 2m-2 13h2v3.17l-2-1.99zM2 20v-3h2v3h3v2H4a2 2 0 0 1-2-2m8-18h4v2h-4zm0 18h4v2h-4zm10-10h2v4h-2zM2 10h2v4H2z"></svg:path>`,
})
export class MdiSelectionOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
