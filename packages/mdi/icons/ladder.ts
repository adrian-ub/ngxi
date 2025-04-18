import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLadderIcon],svg[mdi-ladder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 1v2h-4V1H8v21h2v-2h4v2h2V1zm0 4v3h-4V5zm0 5v3h-4v-3zm-4 8v-3h4v3z"></svg:path>`,
})
export class MdiLadderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
