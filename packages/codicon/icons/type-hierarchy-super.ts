import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconTypeHierarchySuperIcon],svg[codicon-type-hierarchy-super-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 1h-3l-.5.5v3l.5.5h.068L7.5 9.6L4.432 5H4.5l.5-.5v-3L4.5 1h-3l-.5.5v3l.5.5h1.729l3.333 5H5.5l-.5.5v4l.5.5h4l.5-.5v-4l-.5-.5H8.438l3.333-5H13.5l.5-.5v-3zM2 4V2h2v2zm7 7v3H6v-3zm4-7h-2V2h2z"></svg:path>`,
})
export class CodiconTypeHierarchySuperIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
