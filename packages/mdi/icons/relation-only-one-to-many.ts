import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiRelationOnlyOneToManyIcon],svg[mdi-relation-only-one-to-many-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 13v6h-1l-2-2h-8V9H8v2H6V9H5v2H3V9H2V7h1V5h2v2h1V5h2v2h5v8h6l2-2Z"></svg:path>`,
})
export class MdiRelationOnlyOneToManyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
