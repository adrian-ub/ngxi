import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiHollowRedCircleIcon],svg[openmoji-hollow-red-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#EA5A47" d="M35.566 6.407c-16.016 0-29 12.983-29 29c0 16.016 12.984 29 29 29s29-12.984 29-29c0-16.017-12.984-29-29-29m0 49c-11.046 0-20-8.955-20-20s8.954-20 20-20s20 8.954 20 20s-8.954 20-20 20"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="35.795" cy="35.937" r="29"></svg:circle><svg:circle cx="35.795" cy="35.937" r="20"></svg:circle></svg:g>`,
})
export class OpenmojiHollowRedCircleIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
