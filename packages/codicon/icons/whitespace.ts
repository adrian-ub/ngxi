import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconWhitespaceIcon],svg[codicon-whitespace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2V1H6.5a3.5 3.5 0 0 0 0 7H8v5H7v1h5v-1h-1V2zM8 7H6.5a2.5 2.5 0 1 1 0-5H8zm2 6H9V2h1z"></svg:path>`,
})
export class CodiconWhitespaceIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
