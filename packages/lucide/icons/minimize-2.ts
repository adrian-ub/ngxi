import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideMinimize2Icon],svg[lucide-minimize-2-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 14h6v6m10-10h-6V4m0 6l7-7M3 21l7-7"></svg:path>`,
})
export class LucideMinimize2Icon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
