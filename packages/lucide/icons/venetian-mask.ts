import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideVenetianMaskIcon],svg[lucide-venetian-mask-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M18 11c-1.5 0-2.5.5-3 2"></svg:path><svg:path d="M4 6a2 2 0 0 0-2 2v4a5 5 0 0 0 5 5a8 8 0 0 1 5 2a8 8 0 0 1 5-2a5 5 0 0 0 5-5V8a2 2 0 0 0-2-2h-3a8 8 0 0 0-5 2a8 8 0 0 0-5-2z"></svg:path><svg:path d="M6 11c1.5 0 2.5.5 3 2"></svg:path></svg:g>`,
})
export class LucideVenetianMaskIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
