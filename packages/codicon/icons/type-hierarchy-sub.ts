import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconTypeHierarchySubIcon],svg[codicon-type-hierarchy-sub-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 11h-1.729L8.438 6H9.5l.5-.5v-4L9.5 1h-4l-.5.5v4l.5.5h1.062l-3.333 5H1.5l-.5.5v3l.5.5h3l.5-.5v-3l-.5-.5h-.068L7.5 6.4l3.068 4.6H10.5l-.5.5v3l.5.5h3l.5-.5v-3zM6 5V2h3v3zm-2 7v2H2v-2zm9 2h-2v-2h2z"></svg:path>`,
})
export class CodiconTypeHierarchySubIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
