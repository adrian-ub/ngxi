import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconHash24Icon],svg[octicon-hash-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.618 1.76a.75.75 0 0 1 .623.859L9.46 7.5h6.48l.82-5.118a.75.75 0 0 1 1.48.237L17.46 7.5h3.79a.75.75 0 0 1 0 1.5h-4.03l-.96 6h3.99a.75.75 0 0 1 0 1.5h-4.23l-.78 4.869a.75.75 0 0 1-1.48-.237l.74-4.632H8.02l-.78 4.869a.75.75 0 0 1-1.48-.237L6.5 16.5H2.745a.75.75 0 0 1 0-1.5H6.74l.96-6H3.75a.75.75 0 0 1 0-1.5h4.19l.82-5.118a.75.75 0 0 1 .858-.622M14.741 15l.96-6H9.22l-.96 6Z"></svg:path>`,
})
export class OcticonHash24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
