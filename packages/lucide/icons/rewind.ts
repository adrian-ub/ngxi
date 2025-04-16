import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideRewindIcon],svg[lucide-rewind-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m11 19l-9-7l9-7zm11 0l-9-7l9-7z"></svg:path>`,
})
export class LucideRewindIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
