import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideCornerDownLeftIcon],svg[lucide-corner-down-left-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m9 10l-5 5l5 5"></svg:path><svg:path d="M20 4v7a4 4 0 0 1-4 4H4"></svg:path></svg:g>`,
})
export class LucideCornerDownLeftIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
