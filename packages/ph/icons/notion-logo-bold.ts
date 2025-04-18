import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phNotionLogoBoldIcon],svg[ph-notion-logo-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 36h-40a12 12 0 0 0 0 24h8v101.28L118.51 42.22A12 12 0 0 0 108 36H40a12 12 0 0 0 0 24h8v136h-8a12 12 0 0 0 0 24h40a12 12 0 0 0 0-24h-8V94.72l65.49 119.06A12 12 0 0 0 148 220h48a12 12 0 0 0 12-12V60h8a12 12 0 0 0 0-24M80.3 60h20.6l74.8 136h-20.6Z"></svg:path>`,
})
export class PhNotionLogoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
