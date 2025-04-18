import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatGreyHeartIcon],svg[fluent-emoji-flat-grey-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#9B9B9B" d="M6 5.998c4.665-2.332 8.5.5 10 2.5c1.5-2 5.336-4.832 10-2.5c6 3 4.5 10.5 0 15c-2.195 2.196-6.062 6.063-8.89 8.214a1.764 1.764 0 0 1-2.187-.041C12.33 27.078 8.165 23.163 6 20.998c-4.5-4.5-6-12 0-15"></svg:path><svg:path fill="#636363" d="M16 8.498v3.05c1.27-2.685 4.426-6.27 9.658-5.713c-4.51-2.03-8.195.712-9.658 2.663m-4.054-2.963c-1.684-.587-3.72-.65-5.946.463c-6 3-4.5 10.5 0 15c2.165 2.165 6.33 6.08 8.923 8.173a1.764 1.764 0 0 0 2.186.04q.382-.29.786-.618c-2.855-2.143-6.861-5.519-9.036-7.463c-4.956-4.43-6.609-11.814 0-14.768a9.7 9.7 0 0 1 3.087-.827"></svg:path><svg:ellipse cx="23.477" cy="12.592" fill="#BEBEBE" rx="2.836" ry="4.781" transform="rotate(30 23.477 12.592)"></svg:ellipse></svg:g>`,
})
export class FluentEmojiFlatGreyHeartIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
