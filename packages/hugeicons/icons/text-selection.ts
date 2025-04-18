import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTextSelectionIcon],svg[hugeicons-text-selection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.998 3.022c2.198-.052 3.272-.117 4 1.493m0 0c.557-1.251 1.39-1.608 4-1.493m-4 1.493V18.95m0 0c.231 1.738 1.136 2.154 4 1.99m-4-1.99c-.303 1.782-1.226 2.224-4 1.99m1-8.958h6m10.972 3.981v4.48m0-4.48c.048-.82.05-1.443-.049-1.953c-.232-1.2-1.491-1.924-2.71-2.072c-1.165-.14-2.1.159-3.047 1.534m5.807 2.491h-2.84c-.436 0-.876.021-1.296.138c-2.569.712-2.38 4.303.196 4.746q.431.075.868.057c.677-.03 1.3-.356 1.837-.769c.627-.484 1.235-1.16 1.235-2.18z" color="currentColor"></svg:path>`,
})
export class HugeiconsTextSelectionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
