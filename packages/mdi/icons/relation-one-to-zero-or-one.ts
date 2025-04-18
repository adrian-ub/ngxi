import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiRelationOneToZeroOrOneIcon],svg[mdi-relation-one-to-zero-or-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 15v-2h-2v2h-.21a2.5 2.5 0 0 0-4.58 0H13V7H7V5H5v2H2v2h3v2h2V9h4v8h3.21a2.5 2.5 0 0 0 4.58 0H19v2h2v-2h1v-2m-5.5 2a1 1 0 1 1 1-1a1 1 0 0 1-1 1"></svg:path>`,
})
export class MdiRelationOneToZeroOrOneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
