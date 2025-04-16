import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideVoteIcon],svg[lucide-vote-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m9 12l2 2l4-4"></svg:path><svg:path d="M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5zm17 12H2"></svg:path></svg:g>`,
})
export class LucideVoteIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
