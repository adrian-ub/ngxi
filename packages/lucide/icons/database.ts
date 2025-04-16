import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideDatabaseIcon],svg[lucide-database-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:ellipse cx="12" cy="5" rx="9" ry="3"></svg:ellipse><svg:path d="M3 5v14a9 3 0 0 0 18 0V5"></svg:path><svg:path d="M3 12a9 3 0 0 0 18 0"></svg:path></svg:g>`,
})
export class LucideDatabaseIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
