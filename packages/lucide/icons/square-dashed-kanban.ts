import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideSquareDashedKanbanIcon],svg[lucide-square-dashed-kanban-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v7m4-7v4m4-4v9M5 3a2 2 0 0 0-2 2m6-2h1m4 0h1m4 0a2 2 0 0 1 2 2m0 4v1m0 4v1m0 4a2 2 0 0 1-2 2m-5 0h1m-6 0h1m-5 0a2 2 0 0 1-2-2m0-5v1m0-6v1"></svg:path>`,
})
export class LucideSquareDashedKanbanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
