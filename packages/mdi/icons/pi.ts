import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPiIcon],svg[mdi-pi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5v2h2v12h2V7h6v9a3 3 0 0 0 3 3a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1a1 1 0 0 1-1-1V7h2V5"></svg:path>`,
})
export class MdiPiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
