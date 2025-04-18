import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riKanbanViewIcon],svg[ri-kanban-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm1 16V5h16v14zM9 7H7v8h2zm6 0h2v6h-2zm-2 0h-2v10h2z"></svg:path>`,
})
export class RiKanbanViewIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
