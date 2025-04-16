import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideAlignStartVerticalIcon],svg[lucide-align-start-vertical-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="9" height="6" x="6" y="14" rx="2"></svg:rect><svg:rect width="16" height="6" x="6" y="4" rx="2"></svg:rect><svg:path d="M2 2v20"></svg:path></svg:g>`,
})
export class LucideAlignStartVerticalIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
