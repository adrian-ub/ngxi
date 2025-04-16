import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideHeading1Icon],svg[lucide-heading-1-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12h8m-8 6V6m8 12V6m5 6l3-2v8"></svg:path>`,
})
export class LucideHeading1Icon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
