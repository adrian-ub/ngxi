import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconGifIcon],svg[picon-gif-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 2h3v1H1v3h1V4h1v3H0m4-5h1v5H4m2-5h2v1H7v1h1v1H7v2H6"></svg:path>`,
})
export class PiconGifIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
