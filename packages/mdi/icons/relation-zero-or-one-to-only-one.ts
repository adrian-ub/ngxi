import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiRelationZeroOrOneToOnlyOneIcon],svg[mdi-relation-zero-or-one-to-only-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 15v-2h-2v2h-1v-2h-2v2h-3V7H9.79a2.5 2.5 0 0 0-4.58 0H5V5H3v2H2v2h1v2h2V9h.21a2.5 2.5 0 0 0 4.58 0H11v8h5v2h2v-2h1v2h2v-2h1v-2M7.5 9a1 1 0 1 1 1-1a1 1 0 0 1-1 1"></svg:path>`,
})
export class MdiRelationZeroOrOneToOnlyOneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
