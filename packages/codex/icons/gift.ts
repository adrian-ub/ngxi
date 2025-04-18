import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codexGiftIcon],svg[codex-gift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:rect width="12" height="6" x="6" y="13" rx="2"></svg:rect><svg:path d="M12 9v10m-7-8a2 2 0 0 1 2-2h10a2 2 0 1 1 0 4H7a2 2 0 0 1-2-2Zm11-2c0-1.105 0-3-2-3s-2 1.895-2 3c0-1.105 0-3-2-3S8 7.895 8 9"></svg:path></svg:g>`,
})
export class CodexGiftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
