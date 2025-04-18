import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phKanbanBoldIcon],svg[ph-kanban-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 44H40a12 12 0 0 0-12 12v152a20 20 0 0 0 20 20h40a20 20 0 0 0 20-20v-44h40v12a20 20 0 0 0 20 20h40a20 20 0 0 0 20-20V56a12 12 0 0 0-12-12m-12 64h-32V68h32ZM84 68v40H52V68Zm0 136H52v-72h32Zm24-64V68h40v72Zm64 32v-40h32v40Z"></svg:path>`,
})
export class PhKanbanBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
