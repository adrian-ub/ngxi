import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorFood20Icon],svg[fluent-color-food-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorFood200)" d="M15.5 2A4.5 4.5 0 0 0 11 6.5v2a1.5 1.5 0 0 0 1.5 1.5h.454l-.03.356a426 426 0 0 0-.172 2.042c-.124 1.507-.252 3.161-.252 3.602a2 2 0 1 0 4 0c0-.44-.128-2.095-.252-3.602a528 528 0 0 0-.228-2.696L16 9.478V2.5a.5.5 0 0 0-.5-.5"></svg:path><svg:path fill="url(#fluentColorFood201)" d="M4.492 2h.013c.28 0 .507.227.507.506v3.999A.495.495 0 1 0 6 6.5v-4a.5.5 0 0 1 1 0v4.026a.495.495 0 0 0 .99-.021v-4A.505.505 0 0 1 8.49 2h.019a.5.5 0 0 1 .485.423C9.007 2.501 9.5 5.592 9.5 7c0 .95-.442 1.797-1.13 2.345c-.25.201-.37.419-.37.601v.5q0 .027.003.054c.027.26.151 1.429.268 2.631c.115 1.185.229 2.45.229 2.869a2 2 0 1 1-4 0c0-.42.114-1.684.229-2.869c.117-1.202.24-2.372.268-2.63L5 10.446v-.5c0-.183-.12-.4-.37-.601A3 3 0 0 1 3.5 7c0-1.405.49-4.482.506-4.576A.504.504 0 0 1 4.492 2"></svg:path><svg:defs><svg:lineargradient id="fluentColorFood200" x1="10.154" x2="23.584" y1="3" y2="7.391" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#6CE0FF"></svg:stop><svg:stop offset="1" stop-color="#0067BF"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorFood201" x1="2.577" x2="16.964" y1="3" y2="8.131" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#6CE0FF"></svg:stop><svg:stop offset="1" stop-color="#0067BF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorFood20Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
