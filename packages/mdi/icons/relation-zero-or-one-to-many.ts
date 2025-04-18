import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiRelationZeroOrOneToManyIcon],svg[mdi-relation-zero-or-one-to-many-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21 13l-2 2h-6V7H9.79a2.5 2.5 0 0 0-4.58 0H5V5H3v2H2v2h1v2h2V9h.21a2.5 2.5 0 0 0 4.58 0H11v8h8l2 2h1v-6M7.5 9a1 1 0 1 1 1-1a1 1 0 0 1-1 1"></svg:path>`,
})
export class MdiRelationZeroOrOneToManyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
