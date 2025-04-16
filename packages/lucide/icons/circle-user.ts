import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideCircleUserIcon],svg[lucide-circle-user-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:circle cx="12" cy="10" r="3"></svg:circle><svg:path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"></svg:path></svg:g>`,
})
export class LucideCircleUserIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
