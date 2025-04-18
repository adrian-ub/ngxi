import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilCreditCardCircleFilledIcon],svg[pepicons-pencil-credit-card-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilCreditCardCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M19 7H7a2.5 2.5 0 0 0-2.5 2.5v7A2.5 2.5 0 0 0 7 19h12a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 19 7M5.5 9.5A1.5 1.5 0 0 1 7 8h12a1.5 1.5 0 0 1 1.5 1.5v7A1.5 1.5 0 0 1 19 18H7a1.5 1.5 0 0 1-1.5-1.5z"></svg:path><svg:path d="M5.5 9.5h15a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-15A.5.5 0 0 1 5 11v-1a.5.5 0 0 1 .5-.5m3.5 3H8a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1m-1 2v-1h1v1z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilCreditCardCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilCreditCardCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
