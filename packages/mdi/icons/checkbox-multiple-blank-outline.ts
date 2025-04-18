import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCheckboxMultipleBlankOutlineIcon],svg[mdi-checkbox-multiple-blank-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 16V4H8v12zm2 0a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2h12a2 2 0 0 1 2 2zm-6 4v2H4a2 2 0 0 1-2-2V7h2v13z"></svg:path>`,
})
export class MdiCheckboxMultipleBlankOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
