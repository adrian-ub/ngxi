import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconOutputIcon],svg[codicon-output-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M19.5 0v1.5L21 3v19.5L19.5 24h-15L3 22.5V3l1.5-1.5V0H6v1.5h3V0h1.5v1.5h3V0H15v1.5h3V0zm-15 22.5h15V3h-15zM7.5 6h9v1.5h-9zm9 6h-9v1.5h9zm-9 6h9v1.5h-9z" clip-rule="evenodd"></svg:path>`,
})
export class CodiconOutputIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
