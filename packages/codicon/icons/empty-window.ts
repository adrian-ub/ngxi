import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconEmptyWindowIcon],svg[codicon-empty-window-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 4h3v1H4v3H3V5H0V4h3V1h1zM1 14.5V9h1v5h12V7H8V6h6V4H8V3h6.5l.5.5v11l-.5.5h-13z" clip-rule="evenodd"></svg:path>`,
})
export class CodiconEmptyWindowIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
