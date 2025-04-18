import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenCtsiIcon],svg[token-ctsi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.771 8.96h-3.838l-2.635 3.079l1.056 2.994H21zm-8.198 0H3l2.095 6.073h3.826l2.684-3.116z"></svg:path><svg:path fill="currentColor" d="m7.378 8.353l4.992-5.271l2.138 5.648l-2.43 2.745l-1.165-3.122zm9.134 7.288l-5.004 5.277L9.37 15.27l2.43-2.745l1.171 3.116h3.547z"></svg:path>`,
})
export class TokenCtsiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
