import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesEditorParagraphSolidIcon],svg[bubbles-editor-paragraph-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.5 0a1 1 0 0 0 0 2H4v17a1 1 0 1 0 2 0v-8h4.417a5.63 5.63 0 0 0 3.941-1.604A5.46 5.46 0 0 0 16 5.5a5.46 5.46 0 0 0-1.642-3.896A5.63 5.63 0 0 0 10.417 0zM6 2v7h4.417c.956 0 1.87-.373 2.54-1.032A3.46 3.46 0 0 0 14 5.5c0-.922-.373-1.81-1.043-2.468A3.63 3.63 0 0 0 10.417 2z" clip-rule="evenodd"></svg:path>`,
})
export class BubblesEditorParagraphSolidIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
