import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideListTodoIcon],svg[lucide-list-todo-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="6" height="6" x="3" y="5" rx="1"></svg:rect><svg:path d="m3 17l2 2l4-4m4-9h8m-8 6h8m-8 6h8"></svg:path></svg:g>`,
})
export class LucideListTodoIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
