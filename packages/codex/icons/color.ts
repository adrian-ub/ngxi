import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codexColorIcon],svg[codex-color-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M5.243 11.408a3 3 0 0 1 .878-2.165l3.536-3.536a1 1 0 0 1 1.414 0l4.95 4.95a1 1 0 0 1 .292.75m-11.07 0a3 3 0 0 0 .878 2.078L8 15.364m-2.757-3.956h6.714m4.356 0a1 1 0 0 1-.292.663l-3.536 3.536a3 3 0 0 1-4.242 0L8 15.364m8.313-3.956h-4.356M8 15.364l3.957-3.956M20 17.462c0 .85-.672 1.538-1.5 1.538s-1.5-.689-1.5-1.538s.9-1.847 1.5-2.462c.6.615 1.5 1.612 1.5 2.462Z"></svg:path>`,
})
export class CodexColorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
