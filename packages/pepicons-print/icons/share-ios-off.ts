import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPrintShareIosOffIcon],svg[pepicons-print-share-ios-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M15.5 9h1c1.105 0 2 .758 2 1.692v7.616c0 .934-.895 1.692-2 1.692h-8c-1.105 0-2-.758-2-1.692v-7.616C6.5 9.758 7.395 9 8.5 9h1" clip-rule="evenodd" opacity=".2"></svg:path><svg:path d="M9.998 2.5a.5.5 0 1 1 1 0L11 13a.5.5 0 1 1-1 0z"></svg:path><svg:path d="M10.82 2.884a.5.5 0 0 0-.64-.768l-3 2.5a.5.5 0 1 0 .64.768z"></svg:path><svg:path d="M10.18 2.884a.5.5 0 1 1 .64-.768l3 2.5a.5.5 0 0 1-.64.768zM13.248 9a.5.5 0 0 1 0-1h.917c1.271 0 2.333.891 2.333 2.039v6.923c0 1.147-1.062 2.038-2.333 2.038H6.832c-1.271 0-2.334-.891-2.334-2.038v-6.923C4.498 8.89 5.561 8 6.832 8h.916a.5.5 0 0 1 0 1h-.916c-.754 0-1.334.486-1.334 1.039v6.923c0 .552.58 1.038 1.334 1.038h7.333c.754 0 1.333-.486 1.333-1.038v-6.923c0-.553-.58-1.039-1.333-1.039z"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPrintShareIosOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
