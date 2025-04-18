import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laFlipboardIcon],svg[la-flipboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h18v18H7zm2 2v14h6v-4h4v-4h4V9zm2 2h10v2h-4v4h-4v4h-2z"></svg:path>`,
})
export class LaFlipboardIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
