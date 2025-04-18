import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTextColumnsBoldIcon],svg[ph-text-columns-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M120 64a12 12 0 0 1-12 12H40a12 12 0 0 1 0-24h68a12 12 0 0 1 12 12m-12 28H40a12 12 0 0 0 0 24h68a12 12 0 0 0 0-24m0 40H40a12 12 0 0 0 0 24h68a12 12 0 0 0 0-24m0 40H40a12 12 0 0 0 0 24h68a12 12 0 0 0 0-24m40-96h68a12 12 0 0 0 0-24h-68a12 12 0 0 0 0 24m68 16h-68a12 12 0 0 0 0 24h68a12 12 0 0 0 0-24m0 40h-68a12 12 0 0 0 0 24h68a12 12 0 0 0 0-24m0 40h-68a12 12 0 0 0 0 24h68a12 12 0 0 0 0-24"></svg:path>`,
})
export class PhTextColumnsBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
