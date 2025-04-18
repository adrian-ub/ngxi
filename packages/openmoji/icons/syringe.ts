import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiSyringeIcon],svg[openmoji-syringe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" fill-rule="evenodd" d="m46.393 17.6l6.782 6.782L39.507 38.05l-6.782-6.782z"></svg:path><svg:path fill="#d22f27" d="m26.785 41.832l2.551 2.552l-2.61 2.61l-2.55-2.552z"></svg:path><svg:path fill="#d0cfce" d="m55.098 12.7l3.283 3.283l-7.206 7.205l-3.283-3.283z"></svg:path><svg:path fill="#d22f27" d="m32.77 31.37l6.738 6.681l-8.252 8.252l-6.782-6.782z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m46.393 17.6l6.782 6.782l-21.927 21.927l-6.782-6.782z"></svg:path><svg:path d="m26.785 41.832l2.551 2.552l-2.61 2.61l-2.55-2.552zM58.61 15.46l-7.123 7.123l-3.283-3.283l7.108-7.108M24.95 46.21L12.8 58.37m28.27-26.08l2.09 2.08m.77-7.19l3.21 3.21m-14.415.878l6.782 6.782l-8.252 8.252l-6.782-6.782zM53.57 10.43l6.744 6.744"></svg:path></svg:g>`,
})
export class OpenmojiSyringeIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
