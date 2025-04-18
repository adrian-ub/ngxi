import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiRelationOneToManyIcon],svg[mdi-relation-one-to-many-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 13v6h-1l-2-2h-8V9H7v2H5V9H2V7h3V5h2v2h6v8h6l2-2Z"></svg:path>`,
})
export class MdiRelationOneToManyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
