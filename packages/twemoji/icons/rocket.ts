import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiRocketIcon],svg[twemoji-rocket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#A0041E" d="m1 17l8-7l16 1l1 16l-7 8s.001-5.999-6-12s-12-6-12-6"></svg:path><svg:path fill="#FFAC33" d="M.973 35s-.036-7.979 2.985-11S15 21.187 15 21.187S14.999 29 11.999 32S.973 35 .973 35"></svg:path><svg:circle cx="8.999" cy="27" r="4" fill="#FFCC4D"></svg:circle><svg:path fill="#55ACEE" d="M35.999 0s-10 0-22 10c-6 5-6 14-4 16s11 2 16-4c10-12 10-22 10-22"></svg:path><svg:path d="M26.999 5a4 4 0 0 0-3.641 2.36A4 4 0 0 1 24.999 7a4 4 0 0 1 4 4c0 .586-.133 1.139-.359 1.64A3.99 3.99 0 0 0 30.999 9a4 4 0 0 0-4-4"></svg:path><svg:path fill="#A0041E" d="M8 28s0-4 1-5s13.001-10.999 14-10s-9.001 13-10.001 14S8 28 8 28"></svg:path>`,
})
export class TwemojiRocketIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
