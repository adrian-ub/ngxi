import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiTeacupWithoutHandleIcon],svg[openmoji-teacup-without-handle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="M19.906 55.8h32.187C62.889 49.308 68 36.292 68 20.752l-39.366-.436H21.71L4 20.752C4 36.292 9.11 49.308 19.906 55.8"></svg:path><svg:path fill="#b1cc33" d="M18.324 29.419h14.019v17.524H18.324z"></svg:path><svg:path fill="#5c9e31" d="M31 30L21 47l2-.058h9.343L32 30z"></svg:path><svg:g fill="none" stroke="#000" stroke-width="2"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M19.5 20.316H4c0 15.54 5.11 28.556 15.906 35.048h32.187C62.889 48.872 68 35.856 68 20.316H31.5"></svg:path><svg:path stroke-linecap="round" stroke-miterlimit="10" d="m25.5 20.5l-.167 10.919"></svg:path><svg:path stroke-linejoin="round" d="M18.324 29.419h14.019v17.524H18.324z"></svg:path></svg:g>`,
})
export class OpenmojiTeacupWithoutHandleIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
