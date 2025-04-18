import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkPillIcon],svg[icon-park-pill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M5.61497 22.5852C4.4434 21.4136 4.4434 19.5141 5.61497 18.3425L18.3429 5.61463C19.5145 4.44305 21.414 4.44305 22.5855 5.61462L42.3845 25.4136C43.5561 26.5852 43.5561 28.4847 42.3845 29.6563L29.6566 42.3842C28.485 43.5557 26.5855 43.5557 25.414 42.3842L5.61497 22.5852Z"></svg:path><svg:circle cx="14.808" cy="20.465" r="2" fill="#fff" transform="rotate(-45 14.808 20.465)"></svg:circle><svg:circle cx="23.293" cy="28.949" r="2" fill="#fff" transform="rotate(-45 23.293 28.95)"></svg:circle><svg:circle cx="19.05" cy="24.707" r="2" fill="#fff" transform="rotate(-45 19.05 24.707)"></svg:circle><svg:circle cx="27.536" cy="33.193" r="2" fill="#fff" transform="rotate(-45 27.536 33.193)"></svg:circle><svg:circle cx="20.464" cy="14.807" r="2" fill="#fff" transform="rotate(-45 20.464 14.807)"></svg:circle><svg:circle cx="28.95" cy="23.293" r="2" fill="#fff" transform="rotate(-45 28.95 23.293)"></svg:circle><svg:circle cx="24.707" cy="19.051" r="2" fill="#fff" transform="rotate(-45 24.707 19.05)"></svg:circle><svg:circle cx="33.193" cy="27.535" r="2" fill="#fff" transform="rotate(-45 33.193 27.535)"></svg:circle></svg:g>`,
})
export class IconParkPillIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
