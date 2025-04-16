import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideInspectionPanelIcon],svg[lucide-inspection-panel-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="18" height="18" x="3" y="3" rx="2"></svg:rect><svg:path d="M7 7h.01M17 7h.01M7 17h.01M17 17h.01"></svg:path></svg:g>`,
})
export class LucideInspectionPanelIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
