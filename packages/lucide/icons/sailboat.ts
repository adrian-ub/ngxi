import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideSailboatIcon],svg[lucide-sailboat-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M22 18H2a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4m-1-4L10 2L3 14zM10 2v16"></svg:path>`,
})
export class LucideSailboatIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
