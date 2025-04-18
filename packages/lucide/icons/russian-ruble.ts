import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideRussianRubleIcon],svg[lucide-russian-ruble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 11h8a4 4 0 0 0 0-8H9v18m-3-6h8"></svg:path>`,
})
export class LucideRussianRubleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
