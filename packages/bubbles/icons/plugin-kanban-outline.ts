import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesPluginKanbanOutlineIcon],svg[bubbles-plugin-kanban-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M14.129 23.75H2.75a1.5 1.5 0 0 1-1.5-1.5V2.75a1.5 1.5 0 0 1 1.5-1.5h19.5a1.5 1.5 0 0 1 1.5 1.5v11.379a1.5 1.5 0 0 1-.439 1.06l-8.122 8.122a1.5 1.5 0 0 1-1.06.439"></svg:path><svg:path d="M14.75 23.615V16.25a1.5 1.5 0 0 1 1.5-1.5h7.365m-8.115-9l-5.309 7.078a1.5 1.5 0 0 1-2.211.208L5.75 11"></svg:path></svg:g>`,
})
export class BubblesPluginKanbanOutlineIcon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}
