import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiTrainIcon],svg[openmoji-train-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="28.8" height="33.6" x="21.6" y="11" fill="#d0cfce" rx="3.056" ry="3.056"></svg:rect><svg:path fill="#3f3f3f" d="M25 18h22v10H25z"></svg:path><svg:path fill="#fcea2b" d="M25 35h5v5h-5zm17 0h5v5h-5z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="2"><svg:path stroke-miterlimit="10" d="M25 48L12 61m48 0L47 48m-34 9.936l46.333.264M17 53.936l38.333.264M21 49.936l30.333.264"></svg:path><svg:path stroke-linejoin="round" d="M47 19v8.8H26M26 40h4v-4m13 4h4v-4"></svg:path><svg:rect width="28.8" height="33.6" x="21.6" y="11" stroke-linejoin="round" rx="3.056" ry="3.056"></svg:rect></svg:g>`,
})
export class OpenmojiTrainIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
