import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siPlayLineIcon],svg[si-play-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" d="m5 3l16 9l-16 9z"></svg:path>`,
})
export class SiPlayLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
