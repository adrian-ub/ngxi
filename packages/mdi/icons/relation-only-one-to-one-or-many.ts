import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiRelationOnlyOneToOneOrManyIcon],svg[mdi-relation-only-one-to-one-or-many-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 13v6h-1l-2-2v2h-2v-2h-6V9H8v2H6V9H5v2H3V9H2V7h1V5h2v2h1V5h2v2h5v8h4v-2h2v2l2-2Z"></svg:path>`,
})
export class MdiRelationOnlyOneToOneOrManyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
