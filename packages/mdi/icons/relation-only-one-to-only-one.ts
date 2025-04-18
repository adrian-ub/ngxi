import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiRelationOnlyOneToOnlyOneIcon],svg[mdi-relation-only-one-to-only-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 15v2h-1v2h-2v-2h-1v2h-2v-2h-5V9H8v2H6V9H5v2H3V9H2V7h1V5h2v2h1V5h2v2h5v8h3v-2h2v2h1v-2h2v2Z"></svg:path>`,
})
export class MdiRelationOnlyOneToOnlyOneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
