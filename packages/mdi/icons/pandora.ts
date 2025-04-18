import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPandoraIcon],svg[mdi-pandora-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20a1 1 0 0 1-1 1H4V3h9.71a6.75 6.75 0 0 1 6.75 6.75c0 3.75-3.02 6.75-6.75 6.75H10z"></svg:path>`,
})
export class MdiPandoraIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
