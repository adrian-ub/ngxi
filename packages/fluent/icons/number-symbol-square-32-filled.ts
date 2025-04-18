import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentNumberSymbolSquare32FilledIcon],svg[fluent-number-symbol-square-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.855 18l.833-4h3.457l-.833 4zM7.5 3A4.5 4.5 0 0 0 3 7.5v17A4.5 4.5 0 0 0 7.5 29h17a4.5 4.5 0 0 0 4.5-4.5v-17A4.5 4.5 0 0 0 24.5 3zm7.979 7.204L15.105 12h3.457l.459-2.204a1 1 0 0 1 1.958.408L20.605 12H22a1 1 0 1 1 0 2h-1.812l-.833 4H21a1 1 0 1 1 0 2h-2.062l-.459 2.204a1 1 0 0 1-1.958-.408L16.895 20h-3.457l-.459 2.204a1 1 0 0 1-1.958-.408L11.395 20H10a1 1 0 1 1 0-2h1.812l.833-4H11a1 1 0 1 1 0-2h2.062l.459-2.204a1 1 0 0 1 1.958.408"></svg:path>`,
})
export class FluentNumberSymbolSquare32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
