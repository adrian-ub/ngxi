import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconTypeHierarchyIcon],svg[codicon-type-hierarchy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 12h-1.793L10 10.293V6.5L9.5 6H8V4h.5l.5-.5v-2L8.5 1h-2l-.5.5v2l.5.5H7v2H5.5l-.5.5v3.793L3.293 12H1.5l-.5.5v2l.5.5h2l.5-.5v-1.793L5.707 11h3.586L11 12.707V14.5l.5.5h2l.5-.5v-2zM7 2h1v1H7zM6 7h3v3H6zm-3 7H2v-1h1zm10 0h-1v-1h1z"></svg:path>`,
})
export class CodiconTypeHierarchyIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
