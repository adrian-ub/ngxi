import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiVectorDifferenceBaIcon],svg[mdi-vector-difference-ba-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 22c1.11 0 2-.89 2-2v-2h-2v2h-2v2zm-4 0v-2h-3v2zm-5 0v-2H9v-2H7v2c0 1.11.89 2 2 2zm11-6v-3h-2v3zM9 16V9h7V3c0-1.11-.89-2-2-2H3c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2zm-2-2H3V3h11v4H9c-1.11 0-2 .89-2 2zm15-3V9c0-1.11-.89-2-2-2h-2v2h2v2z"></svg:path>`,
})
export class MdiVectorDifferenceBaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
