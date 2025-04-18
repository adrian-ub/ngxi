import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fxemojiRussianflagIcon],svg[fxemoji-russianflag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FF473E" d="M1 312.52v101.445c0 7.251 4.94 13.588 11.981 15.318c159.163 39.106 318.326-43.539 477.489-8.034c9.83 2.193 19.149-5.331 19.149-15.403V312.52c-169.54-48.324-339.079 48.324-508.619 0"></svg:path><svg:path fill="#0B67B2" d="M1 198.935v113.586c169.54 48.324 339.079-48.324 508.619 0V198.935c-169.54-48.324-339.079 48.324-508.619 0"></svg:path><svg:path fill="#E8E8E8" d="M1 101.194v97.741c169.54 48.324 339.079-48.324 508.619 0V93.075c0-7.251-4.94-13.588-11.981-15.318c-159.163-39.106-318.326 43.539-477.489 8.034C10.319 83.599 1 91.122 1 101.194"></svg:path>`,
})
export class FxemojiRussianflagIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
