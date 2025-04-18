import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiRelationOneOrManyToOneOrManyIcon],svg[mdi-relation-one-or-many-to-one-or-many-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 13v6h-1l-2-2v2h-2v-2h-6V9H7v2H5V9l-2 2H2V5h1l2 2V5h2v2h6v8h4v-2h2v2l2-2Z"></svg:path>`,
})
export class MdiRelationOneOrManyToOneOrManyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
