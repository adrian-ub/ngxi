import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesEditorLeftAlignSolidIcon],svg[bubbles-editor-left-align-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 2.082a1 1 0 0 1 1-1h15.652a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1m0 16.666a1 1 0 0 1 1-1h18a1 1 0 0 1 0 2H1a1 1 0 0 1-1-1m1-13.5a1 1 0 1 0 0 2h12.522a1 1 0 1 0 0-2zm-1 5.167a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1m1 3.167a1 1 0 0 0 0 2h14.87a1 1 0 0 0 0-2z" clip-rule="evenodd"></svg:path>`,
})
export class BubblesEditorLeftAlignSolidIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
