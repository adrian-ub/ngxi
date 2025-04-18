import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiRelationOnlyOneToZeroOrManyIcon],svg[mdi-relation-only-one-to-zero-or-many-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21 13l-2 2h-.21a2.5 2.5 0 0 0-4.58 0H13V7H8V5H6v2H5V5H3v2H2v2h1v2h2V9h1v2h2V9h3v8h3.21a2.5 2.5 0 0 0 4.58 0H19l2 2h1v-6m-5.5 4a1 1 0 1 1 1-1a1 1 0 0 1-1 1"></svg:path>`,
})
export class MdiRelationOnlyOneToZeroOrManyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
