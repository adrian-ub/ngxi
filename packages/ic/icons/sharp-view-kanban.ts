import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpViewKanbanIcon],svg[ic-sharp-view-kanban-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3H3v18h18zM9 17H7V7h2zm4-5h-2V7h2zm4 3h-2V7h2z"></svg:path>`,
})
export class IcSharpViewKanbanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
