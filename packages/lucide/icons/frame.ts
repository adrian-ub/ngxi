import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideFrameIcon],svg[lucide-frame-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M22 6H2m20 12H2M6 2v20M18 2v20"></svg:path>`,
})
export class LucideFrameIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
