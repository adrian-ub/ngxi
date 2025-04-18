import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideRailSymbolIcon],svg[lucide-rail-symbol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15h14M5 9h14m-5 11l-5-5l6-6l-5-5"></svg:path>`,
})
export class LucideRailSymbolIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
