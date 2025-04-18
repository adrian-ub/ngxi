import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fxemojiRoundpushpinIcon],svg[fxemoji-roundpushpin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#D5DEE4" d="M256 504.575c-13.382 0-18.231-10.848-18.231-24.23l-6-323.28c0-13.382 10.848-24.23 24.23-24.23s24.23 10.848 24.23 24.23l-6 323.28c.001 13.382-4.847 24.23-18.229 24.23"></svg:path><svg:path fill="#BCCBD3" d="M256 132.834c-13.382 0-24.23 10.848-24.23 24.23l1.752 94.386C240.745 253.119 248.27 254 256 254s15.255-.881 22.479-2.549l1.752-94.386c-.001-13.382-10.849-24.231-24.231-24.231"></svg:path><svg:circle cx="256" cy="112" r="111" fill="#FF473E"></svg:circle><svg:ellipse cx="194.399" cy="60.749" fill="#FD7085" rx="19.076" ry="32.428" transform="rotate(33.488 194.39 60.752)"></svg:ellipse>`,
})
export class FxemojiRoundpushpinIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
