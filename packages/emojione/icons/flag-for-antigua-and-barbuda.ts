import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneFlagForAntiguaAndBarbudaIcon],svg[emojione-flag-for-antigua-and-barbuda-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ed4c5c" d="M56 14H8c-3.8 5-6 11.2-6 18c0 16.6 13.4 30 30 30s30-13.4 30-30c0-6.8-2.2-13-6-18"></svg:path><svg:path id="emojioneFlagForAntiguaAndBarbuda0" fill="#42ade2" d="M20.5 39h23l7-14h-37z"></svg:path><svg:use href="#emojioneFlagForAntiguaAndBarbuda0"></svg:use><svg:path fill="#3e4347" d="M50.5 25L56 14C50.5 6.7 41.8 2 32 2S13.5 6.7 8 14l5.5 11z"></svg:path><svg:path fill="#fff" d="M20.5 39L32 62l11.5-23z"></svg:path><svg:path fill="#ffce31" d="m36.2 22.2l5-6.4l-6.4 5.1L37 13l-4 7.1l-.9-8.1l-1.1 8.1l-3.9-7.1l2.1 7.8l-6.4-5l5.1 6.4L20 20l7.1 4l-8.1.9l.4.1h25.2l-7.7-1l7.1-3.9z"></svg:path>`,
})
export class EmojioneFlagForAntiguaAndBarbudaIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
