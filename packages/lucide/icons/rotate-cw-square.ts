import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideRotateCwSquareIcon],svg[lucide-rotate-cw-square-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 5H6a2 2 0 0 0-2 2v3"></svg:path><svg:path d="m9 8l3-3l-3-3M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"></svg:path></svg:g>`,
})
export class LucideRotateCwSquareIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
