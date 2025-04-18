import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesEditorJustifiedAlignSolidIcon],svg[bubbles-editor-justified-align-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 2.082a1 1 0 0 1 1-1h17.617a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1M0 18a1 1 0 0 1 1-1h13.021a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1M1 5a1 1 0 0 0 0 2h17.617a1 1 0 1 0 0-2zm-1 5a1 1 0 0 1 1-1h17.617a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1m1 3a1 1 0 1 0 0 2h17.617a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path>`,
})
export class BubblesEditorJustifiedAlignSolidIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
