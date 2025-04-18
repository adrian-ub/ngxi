import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiRelationManyToOneIcon],svg[mdi-relation-many-to-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 15v2h-3v2h-2v-2h-6V9H5l-2 2H2V5h1l2 2h8v8h4v-2h2v2Z"></svg:path>`,
})
export class MdiRelationManyToOneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
