import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesEditorIndentDecreaseSolidIcon],svg[bubbles-editor-indent-decrease-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.267 2.082a1 1 0 0 1 1-1H18a1 1 0 1 1 0 2H4.267a1 1 0 0 1-1-1m0 16.666a1 1 0 0 1 1-1H18a1 1 0 0 1 0 2H4.267a1 1 0 0 1-1-1M7.7 14.415a1 1 0 0 0 0 2H18a1 1 0 0 0 0-2zm-1-2.333a1 1 0 0 1 1-1H18a1 1 0 0 1 0 2H7.7a1 1 0 0 1-1-1m1-4.334a1 1 0 1 0 0 2H18a1 1 0 0 0 0-2zm-1-2.333a1 1 0 0 1 1-1H18a1 1 0 0 1 0 2H7.7a1 1 0 0 1-1-1m-2.86.887c.157-.15.354-.252.57-.288l.13-.013a1.08 1.08 0 0 1 .968.532c.104.175.159.376.159.58v6.774c0 .204-.055.405-.159.58a1.1 1.1 0 0 1-.458.425a1.06 1.06 0 0 1-1.21-.195l-3.5-3.386A1.1 1.1 0 0 1 0 10.5a1.14 1.14 0 0 1 .34-.81z" clip-rule="evenodd"></svg:path>`,
})
export class BubblesEditorIndentDecreaseSolidIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
