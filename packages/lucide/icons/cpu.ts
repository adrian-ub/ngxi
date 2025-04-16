import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideCpuIcon],svg[lucide-cpu-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="16" height="16" x="4" y="4" rx="2"></svg:rect><svg:rect width="6" height="6" x="9" y="9" rx="1"></svg:rect><svg:path d="M15 2v2m0 16v2M2 15h2M2 9h2m16 6h2m-2-6h2M9 2v2m0 16v2"></svg:path></svg:g>`,
})
export class LucideCpuIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
