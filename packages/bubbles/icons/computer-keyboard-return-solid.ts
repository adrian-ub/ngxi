import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesComputerKeyboardReturnSolidIcon],svg[bubbles-computer-keyboard-return-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.198.2h-4.8a1.2 1.2 0 1 0 0 2.4h4.8a.4.4 0 0 1 .402.402v6.796a.4.4 0 0 1-.402.402h-9.1l1.15-1.152A1.2 1.2 0 0 0 3.552 7.36l-3.2 3.2a1.2 1.2 0 0 0 0 1.696l3.2 3.2a1.2 1.2 0 1 0 1.696-1.696l-1.15-1.152h9.1A2.807 2.807 0 0 0 16 9.798V3.002A2.805 2.805 0 0 0 13.198.2"></svg:path>`,
})
export class BubblesComputerKeyboardReturnSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
