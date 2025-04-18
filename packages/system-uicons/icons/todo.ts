import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[systemUiconsTodoIcon],svg[system-uicons-todo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 3.5h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2v-10a2 2 0 0 1 2-2"></svg:path><svg:g fill="currentColor" transform="translate(3 3)"><svg:circle cx="7.5" cy="7.5" r="1" transform="matrix(-1 0 0 1 15 0)"></svg:circle><svg:circle cx="3.5" cy="7.5" r="1"></svg:circle><svg:circle cx="11.5" cy="7.5" r="1"></svg:circle></svg:g></svg:g>`,
})
export class SystemUiconsTodoIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}
