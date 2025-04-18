import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesEditorProgrammingCodeSolidIcon],svg[bubbles-editor-programming-code-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.399 3.452a1 1 0 1 0-1.957-.412L7.6 16.549a1 1 0 1 0 1.957.412zm-6.533 1.75a1 1 0 0 1-.143 1.407l-3.14 2.558l3.14 2.558a1 1 0 1 1-1.264 1.55L.37 9.942a1 1 0 0 1 0-1.55l4.09-3.334a1 1 0 0 1 1.407.144m8.268 0a1 1 0 0 1 1.406-.144l4.091 3.334a1 1 0 0 1 0 1.55l-4.09 3.333a1 1 0 1 1-1.264-1.55l3.14-2.558l-3.14-2.558a1 1 0 0 1-.143-1.407" clip-rule="evenodd"></svg:path>`,
})
export class BubblesEditorProgrammingCodeSolidIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
