import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riKanbanView2Icon],svg[ri-kanban-view-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm14 15h4V5h-4zM14 5h-4v14h4zM4 5v14h4V5z"></svg:path>`,
})
export class RiKanbanView2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
