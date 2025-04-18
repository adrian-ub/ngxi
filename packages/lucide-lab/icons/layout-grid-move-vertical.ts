import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabLayoutGridMoveVerticalIcon],svg[lucide-lab-layout-grid-move-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="7" height="7" x="14" y="3" rx="1"></svg:rect><svg:rect width="7" height="7" x="14" y="14" rx="1"></svg:rect><svg:path d="m2 7l4-4l4 4M6 3v18m-4-4l4 4l4-4"></svg:path></svg:g>`,
})
export class LucideLabLayoutGridMoveVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
