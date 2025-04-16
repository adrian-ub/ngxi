import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsFireIcon],svg[heroicons-fire-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M15.362 5.214A8.252 8.252 0 0 1 12 21A8.25 8.25 0 0 1 6.038 7.047A8.3 8.3 0 0 0 9 9.601a8.98 8.98 0 0 1 3.361-6.867a8.2 8.2 0 0 0 3 2.48"></svg:path><svg:path d="M12 18a3.75 3.75 0 0 0 .495-7.468a6 6 0 0 0-1.925 3.547a6 6 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18"></svg:path></svg:g>`,
})
export class HeroiconsFireIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
