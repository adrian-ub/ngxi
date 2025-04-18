import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiFlagForFlagCostaRicaIcon],svg[twemoji-flag-for-flag-costa-rica-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#002B7F" d="M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v18z"></svg:path><svg:path fill="#EEE" d="M0 9h36v18H0z"></svg:path><svg:path fill="#CE1225" d="M0 13h36v10H0z"></svg:path><svg:ellipse fill="#EEE" cx="8.5" cy="18" rx="3.5" ry="4"></svg:ellipse><svg:path fill="#F4CB58" d="M10.269 19.5c0 .828-.792 2.079-1.769 2.079S6.731 20.328 6.731 19.5c0-.829.792-1.5 1.769-1.5s1.769.671 1.769 1.5z"></svg:path><svg:ellipse fill="#DCA841" cx="8.5" cy="19.5" rx="2.5" ry="1.5"></svg:ellipse><svg:ellipse fill="#89C5E4" cx="8.5" cy="16" rx="1.5" ry="1"></svg:ellipse><svg:ellipse fill="#088930" cx="8.5" cy="18.5" rx="1.5" ry="2.5"></svg:ellipse><svg:ellipse fill="#DCA841" cx="8.5" cy="16.5" rx="1.5" ry=".5"></svg:ellipse><svg:path fill="#89C5E4" d="M10 18c0 1.104-.671 2-1.5 2S7 19.104 7 18s.671-1.498 1.5-1.498S10 16.896 10 18z"></svg:path><svg:ellipse fill="#DCA841" cx="8.5" cy="18.5" rx="1.5" ry=".5"></svg:ellipse>`,
})
export class TwemojiFlagForFlagCostaRicaIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
