import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinBenchmarkIcon],svg[catppuccin-benchmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#f5a97f" stroke-linecap="round" stroke-linejoin="round" d="M14.562 13.625c.636-1.1.938-2.387.938-3.75a7.5 7.5 0 1 0-13.997 3.75m5.56 0l3.75-4.688"></svg:path>`,
})
export class CatppuccinBenchmarkIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
