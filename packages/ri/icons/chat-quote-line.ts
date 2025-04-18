import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riChatQuoteLineIcon],svg[ri-chat-quote-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455L2 22.5V4a1 1 0 0 1 1-1zm-1 2H4v13.385L5.763 17H20zm-9.485 2.412l.447.688c-1.668.903-1.639 2.352-1.639 2.665c.155-.022.318-.025.48-.01a1.76 1.76 0 0 1 1.613 1.745a1.75 1.75 0 0 1-1.75 1.75c-.537 0-1.05-.245-1.374-.59c-.515-.546-.792-1.16-.792-2.155c0-1.75 1.228-3.318 3.015-4.093m5 0l.447.688c-1.668.903-1.639 2.352-1.639 2.665c.155-.022.318-.025.48-.01a1.76 1.76 0 0 1 1.613 1.745a1.75 1.75 0 0 1-1.75 1.75c-.537 0-1.05-.245-1.374-.59c-.515-.546-.792-1.16-.792-2.155c0-1.75 1.228-3.318 3.015-4.093"></svg:path>`,
})
export class RiChatQuoteLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
