import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideCircleArrowOutDownLeftIcon],svg[lucide-circle-arrow-out-down-left-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 12a10 10 0 1 1 10 10M2 22l10-10M8 22H2v-6"></svg:path>`,
})
export class LucideCircleArrowOutDownLeftIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
