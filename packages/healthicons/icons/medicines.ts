import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsMedicinesIcon],svg[healthicons-medicines-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M42 14a8 8 0 1 1-16 0a8 8 0 0 1 16 0m-3.718.985a1 1 0 0 1-1.198.75l-6.616-1.52a1 1 0 0 1 .448-1.95l6.616 1.521a1 1 0 0 1 .75 1.199" clip-rule="evenodd"></svg:path><svg:path d="M16.778 9.245c-.647-1.532-2.813-1.686-3.682-.263L6.292 20.115c-.785 1.284.092 2.924 1.623 3.033l11.866.846c1.53.11 2.644-1.388 2.06-2.77z"></svg:path><svg:path fill-rule="evenodd" d="M35.385 36.36a6 6 0 0 0-5.071-10.876l-10.876 5.07a6 6 0 1 0 5.071 10.877zm-5.442.33l4.597-2.143a4 4 0 0 0-3.381-7.25l-4.597 2.143z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsMedicinesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
