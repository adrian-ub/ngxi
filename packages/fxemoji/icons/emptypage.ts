import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fxemojiEmptypageIcon],svg[fxemoji-emptypage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#F9E7C0" d="M437.567 512H88.004a8.18 8.18 0 0 1-8.182-8.182V8.182A8.18 8.18 0 0 1 88.004 0H437.83a7.92 7.92 0 0 1 7.92 7.92v495.898a8.183 8.183 0 0 1-8.183 8.182"></svg:path>`,
})
export class FxemojiEmptypageIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
