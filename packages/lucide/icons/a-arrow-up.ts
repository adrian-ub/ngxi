import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideAArrowUpIcon],svg[lucide-a-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.5 13h6M2 16l4.5-9l4.5 9m7 0V7m-4 4l4-4l4 4"></svg:path>`,
})
export class LucideAArrowUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
