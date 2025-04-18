import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedCtsiIcon],svg[token-branded-ctsi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#131619"><svg:path d="M18.771 8.958h-3.838l-2.635 3.08l1.056 2.993H21zm-8.198 0H3l2.095 6.073h3.826l2.684-3.115z"></svg:path><svg:path d="m7.38 8.353l4.991-5.271L14.51 8.73l-2.43 2.745l-1.165-3.122zm9.133 7.288l-5.004 5.277L9.37 15.27l2.43-2.745l1.171 3.116h3.547z"></svg:path></svg:g>`,
})
export class TokenBrandedCtsiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
