import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinAzurePipelinesIcon],svg[catppuccin-azure-pipelines-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#b7bdf8" stroke-linecap="round" stroke-linejoin="round" d="M1.5 12v2.5H4m2.5-9l2-4h6v6l-4 3v4h-4L6 14l1.5-1.5L6 11l-1.5 1.5l-1-1L5 10L3.5 8.5L2 10l-.5-.5v-4zm4 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class CatppuccinAzurePipelinesIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
