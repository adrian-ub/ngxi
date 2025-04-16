import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideTentTreeIcon],svg[lucide-tent-tree-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="4" cy="4" r="2"></svg:circle><svg:path d="m14 5l3-3l3 3m-6 5l3-3l3 3m-3 4V2m0 12H7l-5 8h20Zm-9 0v8m1-8l5 8"></svg:path></svg:g>`,
})
export class LucideTentTreeIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
