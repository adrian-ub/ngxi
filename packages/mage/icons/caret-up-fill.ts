import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageCaretUpFillIcon],svg[mage-caret-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.66 16.01a1.35 1.35 0 0 1-.47.54c-.203.13-.439.2-.68.2h-13a1.3 1.3 0 0 1-.69-.2a1.28 1.28 0 0 1-.56-1.25a1.27 1.27 0 0 1 .31-.65l6.09-6.77a1.7 1.7 0 0 1 .58-.45a1.8 1.8 0 0 1 .73-.18c.253.003.503.05.74.14c.23.101.438.247.61.43l6.11 6.83c.163.182.267.408.3.65a1.24 1.24 0 0 1-.07.71"></svg:path>`,
})
export class MageCaretUpFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
