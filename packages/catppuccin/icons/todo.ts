import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinTodoIcon],svg[catppuccin-todo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#a6da95" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M14.5 8A6.5 6.5 0 0 1 8 14.5A6.5 6.5 0 0 1 1.5 8A6.5 6.5 0 0 1 8 1.5A6.5 6.5 0 0 1 14.5 8"></svg:path><svg:path d="m4.5 7.5l2.5 3l4.5-5"></svg:path></svg:g>`,
})
export class CatppuccinTodoIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
