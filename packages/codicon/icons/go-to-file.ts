import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconGoToFileIcon],svg[codicon-go-to-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m6 5.914l2.06-2.06v-.708L5.915 1l-.707.707l.043.043l.25.25l1 1h-3a2.5 2.5 0 0 0 0 5H4V7h-.5a1.5 1.5 0 1 1 0-3h3L5.207 5.293L5.914 6zM11 2H8.328l-1-1H12l.71.29l3 3L16 5v9l-1 1H6l-1-1V6.5l1 .847V14h9V6h-4zm1 0v3h3z" clip-rule="evenodd"></svg:path>`,
})
export class CodiconGoToFileIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
