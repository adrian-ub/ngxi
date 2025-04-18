import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconAddIcon],svg[codicon-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 7v1H8v6H7V8H1V7h6V1h1v6z"></svg:path>`,
})
export class CodiconAddIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
