import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideFishSymbolIcon],svg[lucide-fish-symbol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 16s9-15 20-4C11 23 2 8 2 8"></svg:path>`,
})
export class LucideFishSymbolIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
