import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideArrowDown01Icon],svg[lucide-arrow-down-0-1-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m3 16l4 4l4-4m-4 4V4"></svg:path><svg:rect width="4" height="6" x="15" y="4" ry="2"></svg:rect><svg:path d="M17 20v-6h-2m0 6h4"></svg:path></svg:g>`,
})
export class LucideArrowDown01Icon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
