import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiVectorArrangeBelowIcon],svg[mdi-vector-arrange-below-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 22c1.11 0 2-.89 2-2V9c0-1.11-.89-2-2-2H9c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2zm0-2H9V9h11zM5 16v-2H3V3h11v2h2V3c0-1.11-.89-2-2-2H3c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2z"></svg:path>`,
})
export class MdiVectorArrangeBelowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
