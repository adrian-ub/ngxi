import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPersonCircleFilledIcon],svg[pepicons-pencil-person-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilPersonCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g stroke="#000" stroke-linecap="round" transform="translate(3 3)"><svg:circle cx="9.5" cy="5.5" r="3"></svg:circle><svg:path d="M15 16.5v-2c0-3.098-2.495-6-5.5-6S4 11.402 4 14.5v2"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilPersonCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilPersonCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
