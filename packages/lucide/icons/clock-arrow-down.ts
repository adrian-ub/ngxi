import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideClockArrowDownIcon],svg[lucide-clock-arrow-down-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12.338 21.994a10 10 0 1 1 9.587-8.767"></svg:path><svg:path d="M12 6v6l2 1m0 5l4 4l4-4m-4-4v8"></svg:path></svg:g>`,
})
export class LucideClockArrowDownIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
