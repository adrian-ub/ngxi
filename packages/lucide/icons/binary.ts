import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideBinaryIcon],svg[lucide-binary-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="4" height="6" x="14" y="14" rx="2"></svg:rect><svg:rect width="4" height="6" x="6" y="4" rx="2"></svg:rect><svg:path d="M6 20h4m4-10h4M6 14h2v6m6-16h2v6"></svg:path></svg:g>`,
})
export class LucideBinaryIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
