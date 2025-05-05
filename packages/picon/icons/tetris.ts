import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconTetrisIcon],svg[picon-tetris-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 8V6h4V4h2v4M0 4V2h2V0h4v2H4v2"></svg:path>`,
})
export class PiconTetrisIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
