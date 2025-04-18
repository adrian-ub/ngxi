import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[quillCheckmarkTodoIcon],svg[quill-checkmark-todo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M26.207 9.293a1 1 0 0 1 0 1.414l-1.625 1.625a1 1 0 0 1-1.414-1.414l1.625-1.625a1 1 0 0 1 1.414 0m-4.875 4.875a1 1 0 0 1 0 1.414l-3.25 3.25a1 1 0 0 1-1.414-1.414l3.25-3.25a1 1 0 0 1 1.414 0m-15.54 2.125a1 1 0 0 1 1.415 0l1.5 1.5a1 1 0 1 1-1.414 1.414l-1.5-1.5a1 1 0 0 1 0-1.414m9.04 4.375a1 1 0 0 1 0 1.414l-1.625 1.625a1 1 0 0 1-1.414 0l-1.5-1.5a1 1 0 1 1 1.414-1.414l.793.793l.918-.918a1 1 0 0 1 1.414 0" clip-rule="evenodd"></svg:path>`,
})
export class QuillCheckmarkTodoIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
