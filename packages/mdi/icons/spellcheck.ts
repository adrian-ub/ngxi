import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSpellcheckIcon],svg[mdi-spellcheck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.59 11.59l-8.09 8.09L9.83 16l-1.41 1.41l5.08 5.09L23 13M6.43 11L8.5 5.5l2.07 5.5m1.88 5h2.09L9.43 3H7.57L2.46 16h2.09l1.12-3h5.64z"></svg:path>`,
})
export class MdiSpellcheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
