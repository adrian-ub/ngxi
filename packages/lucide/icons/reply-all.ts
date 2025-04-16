import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideReplyAllIcon],svg[lucide-reply-all-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m7 17l-5-5l5-5m5 10l-5-5l5-5"></svg:path><svg:path d="M22 18v-2a4 4 0 0 0-4-4H7"></svg:path></svg:g>`,
})
export class LucideReplyAllIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
