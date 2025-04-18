import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconRedoIcon],svg[codicon-redo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.5 2v3.5L12 6H8.5V5h2.521l-.941-.941a3.552 3.552 0 1 0-5.023 5.023l5.197 5.198l-.72.72l-5.198-5.198A4.57 4.57 0 0 1 10.8 3.339l.7.7V2z" clip-rule="evenodd"></svg:path>`,
})
export class CodiconRedoIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
