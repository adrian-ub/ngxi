import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideIterationCwIcon],svg[lucide-iteration-cw-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 10c0-4.4 3.6-8 8-8s8 3.6 8 8s-3.6 8-8 8H4"></svg:path><svg:path d="m8 22l-4-4l4-4"></svg:path></svg:g>`,
})
export class LucideIterationCwIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
