import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoWhiteCircleIcon],svg[noto-white-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="63.93" cy="64" r="60" fill="#BDBDBD"></svg:circle><svg:circle cx="60.03" cy="63.1" r="56.1" fill="#E0E0E0"></svg:circle><svg:path fill="#FFF" d="M23.93 29.7c4.5-7.1 14.1-13 24.1-14.8c2.5-.4 5-.6 7.1.2c1.6.6 2.9 2.1 2 3.8c-.7 1.4-2.6 2-4.1 2.5a44.64 44.64 0 0 0-23 17.4c-2 3-5 11.3-8.7 9.2c-3.9-2.3-3.1-9.5 2.6-18.3"></svg:path>`,
})
export class NotoWhiteCircleIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
