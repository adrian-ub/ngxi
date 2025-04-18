import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fxemojiBlackdiamondsuitIcon],svg[fxemoji-blackdiamondsuit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FF473E" d="M248.07 502.699L86.126 261.32a9.55 9.55 0 0 1 0-10.64L248.07 9.301c3.783-5.639 12.077-5.639 15.859 0L425.874 250.68a9.55 9.55 0 0 1 0 10.64L263.93 502.699c-3.783 5.639-12.077 5.639-15.86 0"></svg:path>`,
})
export class FxemojiBlackdiamondsuitIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
