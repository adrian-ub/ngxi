import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconTodoIcon],svg[picon-todo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0h6L5 1H1v6h6V5l1-1v4H0m2-6l2 2l4-4v2L4 6L2 4"></svg:path>`,
})
export class PiconTodoIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
