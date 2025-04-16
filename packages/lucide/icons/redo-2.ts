import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideRedo2Icon],svg[lucide-redo-2-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m15 14l5-5l-5-5"></svg:path><svg:path d="M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13"></svg:path></svg:g>`,
})
export class LucideRedo2Icon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
