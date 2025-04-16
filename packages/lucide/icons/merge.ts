import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideMergeIcon],svg[lucide-merge-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m8 6l4-4l4 4"></svg:path><svg:path d="M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22m16 0l-5-5"></svg:path></svg:g>`,
})
export class LucideMergeIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
