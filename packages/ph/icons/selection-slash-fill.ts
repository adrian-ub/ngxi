import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSelectionSlashFillIcon],svg[ph-selection-slash-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-56 24h32a16 16 0 0 1 16 16v32a8 8 0 0 1-16 0V72h-32a8 8 0 0 1 0-16m-48 144H72a16 16 0 0 1-16-16v-32a8 8 0 0 1 16 0v32h32a8 8 0 0 1 0 16m101.66 5.66a8 8 0 0 1-11.32 0l-5.65-5.66H152a8 8 0 0 1 0-16h20.69L72 83.31V104a8 8 0 0 1-16 0V67.31l-5.66-5.65a8 8 0 0 1 11.32-11.32l8 8l136 136a8 8 0 0 1 0 11.32"></svg:path>`,
})
export class PhSelectionSlashFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
