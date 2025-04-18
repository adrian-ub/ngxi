import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSelectionForegroundFillIcon],svg[ph-selection-foreground-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M88 200H72a16 16 0 0 1-16-16v-16a8 8 0 0 1 16 0v16h16a8 8 0 0 1 0 16m0-88H72v16a8 8 0 0 1-16 0v-16a16 16 0 0 1 16-16h16a8 8 0 0 1 0 16m72 72a16 16 0 0 1-16 16h-16a8 8 0 0 1 0-16h16v-16a8 8 0 0 1 16 0Zm0-56a8 8 0 0 1-16 0v-16h-16a8 8 0 0 1 0-16h16a16 16 0 0 1 16 16Zm40 16a16 16 0 0 1-16 16a8 8 0 0 1 0-16V72h-72a8 8 0 0 1-16 0a16 16 0 0 1 16-16h72a16 16 0 0 1 16 16Z"></svg:path>`,
})
export class PhSelectionForegroundFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
