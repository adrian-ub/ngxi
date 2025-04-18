import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabStrikethroughSquareIcon],svg[lucide-lab-strikethrough-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="18" height="18" x="3" y="3" rx="2"></svg:rect><svg:path d="M10.5 12a2.5 2.5 0 0 1 0-5H15m-8 5h10m-9 5h5.5a2.5 2.5 0 0 0 0-5"></svg:path></svg:g>`,
})
export class LucideLabStrikethroughSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
