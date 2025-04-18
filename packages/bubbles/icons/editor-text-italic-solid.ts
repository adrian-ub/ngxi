import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesEditorTextItalicSolidIcon],svg[bubbles-editor-text-italic-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#bubblesEditorTextItalicSolid0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M14.801 0h4.2a1 1 0 1 1 0 2h-3.6L6.866 18H9.4a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2h3.6l8.534-16H10.6a1 1 0 1 1 0-2z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="bubblesEditorTextItalicSolid0"><svg:path fill="#fff" d="M0 0h20v20H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class BubblesEditorTextItalicSolidIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
