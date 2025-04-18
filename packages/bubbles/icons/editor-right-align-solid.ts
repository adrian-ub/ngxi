import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesEditorRightAlignSolidIcon],svg[bubbles-editor-right-align-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.13 2.082a1 1 0 0 1 1-1H19a1 1 0 1 1 0 2H4.13a1 1 0 0 1-1-1M0 18.748a1 1 0 0 1 1-1h18a1 1 0 0 1 0 2H1a1 1 0 0 1-1-1m6.478-13.5a1 1 0 1 0 0 2H19a1 1 0 0 0 0-2zM0 10.415a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1m4.13 3.167a1 1 0 0 0 0 2H19a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path>`,
})
export class BubblesEditorRightAlignSolidIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
