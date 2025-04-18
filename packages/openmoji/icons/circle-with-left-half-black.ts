import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiCircleWithLeftHalfBlackIcon],svg[openmoji-circle-with-left-half-black-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="M36.795 44.536V8.923c7.426 0 13.753 3.027 19.004 8.278s7.618 11.69 7.618 19.116s-2.687 13.574-7.938 18.825s-10.977 8.008-18.403 8.008z"></svg:path><svg:path fill="#3f3f3f" d="M37 44.286L35.147 8.984c-7.957 0-13.659 3.14-19.285 8.578S7.492 32.185 9.05 40.11c1.545 7.867 3.927 11.63 9.553 17.07c6.673 4.846 10.442 6.04 18.398 6.04z"></svg:path><svg:g fill="none" stroke="#000" stroke-width="2"><svg:path stroke-linejoin="round" d="M36 64c15.464 0 28-12.536 28-28S51.464 8 36 8S8 20.536 8 36s12.536 28 28 28Z"></svg:path><svg:path stroke-linecap="round" d="M36 8v53"></svg:path></svg:g>`,
})
export class OpenmojiCircleWithLeftHalfBlackIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
