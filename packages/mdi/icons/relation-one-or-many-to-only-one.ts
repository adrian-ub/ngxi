import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiRelationOneOrManyToOnlyOneIcon],svg[mdi-relation-one-or-many-to-only-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 15v2h-1v2h-2v-2h-1v2h-2v-2h-5V9H7v2H5V9l-2 2H2V5h1l2 2V5h2v2h6v8h3v-2h2v2h1v-2h2v2Z"></svg:path>`,
})
export class MdiRelationOneOrManyToOnlyOneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
