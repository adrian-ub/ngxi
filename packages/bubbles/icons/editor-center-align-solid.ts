import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesEditorCenterAlignSolidIcon],svg[bubbles-editor-center-align-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.565 2.082a1 1 0 0 1 1-1h14.87a1 1 0 1 1 0 2H2.565a1 1 0 0 1-1-1M0 18.748a1 1 0 0 1 1-1h18a1 1 0 0 1 0 2H1a1 1 0 0 1-1-1m3.348-13.5a1 1 0 1 0 0 2h13.304a1 1 0 1 0 0-2zM0 10.415a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1m4.13 3.167a1 1 0 0 0 0 2h11.74a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path>`,
})
export class BubblesEditorCenterAlignSolidIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
