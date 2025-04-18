import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagKm1x1Icon],svg[flag-km-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="flagKm1x10"><svg:path fill-opacity=".7" d="M0 0h416.3v416.3H0z"></svg:path></svg:clippath></svg:defs><svg:g fill-rule="evenodd" clip-path="url(#flagKm1x10)" transform="scale(1.23)"><svg:path fill="#ff0" d="M0 0h625v104H0z"></svg:path><svg:path fill="#fff" d="M0 104h625v104.1H0z"></svg:path><svg:path fill="#be0027" d="M0 208.1h625v104H0z"></svg:path><svg:path fill="#3b5aa3" d="M0 312.2h625v104H0z"></svg:path><svg:path fill="#239e46" d="M0 0v416.2l310.4-207.5z"></svg:path><svg:path fill="#fff" d="M127.8 115c-69.2-3.5-100.7 51.6-100.6 94.2c-.2 50.4 47.6 92 91.7 89.4A100 100 0 0 1 65.8 209a98 98 0 0 1 62-94"></svg:path><svg:path fill="#fff" d="m126.8 160.2l-9.8-7.6l-11.8 3.7l4.2-11.6l-7.1-10.1l12.3.4l7.4-10l3.4 12l11.8 3.9l-10.3 7zm-.2 42.3l-9.8-7.6l-11.8 3.7l4.2-11.6l-7.2-10.1l12.4.4l7.4-10l3.4 12l11.8 4l-10.3 6.9zm.2 42.8l-9.8-7.6l-11.8 3.7l4.2-11.7l-7.1-10l12.3.4l7.4-10l3.4 12l11.8 3.9l-10.3 6.9zm-.2 43.1l-9.8-7.6l-11.8 3.7l4.2-11.6l-7.2-10.1l12.4.4l7.4-10l3.4 12l11.8 4l-10.3 6.9z"></svg:path></svg:g>`,
})
export class FlagKm1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
