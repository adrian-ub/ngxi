import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabGridLinesOffsetIcon],svg[lucide-lab-grid-lines-offset-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 3v18m6-18v18M3 11h18M3 17h18"></svg:path>`,
})
export class LucideLabGridLinesOffsetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
