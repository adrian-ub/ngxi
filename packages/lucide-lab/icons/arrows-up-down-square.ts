import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabArrowsUpDownSquareIcon],svg[lucide-lab-arrows-up-down-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m6 9l3-3l3 3M9 6v6"></svg:path><svg:rect width="20" height="20" x="2" y="2" rx="2"></svg:rect><svg:path d="M15 18v-6m3 3l-3 3l-3-3"></svg:path></svg:g>`,
})
export class LucideLabArrowsUpDownSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
