import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRadar01Icon],svg[hugeicons-radar-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M16.596 16.596A6.5 6.5 0 1 1 13 5.576"></svg:path><svg:path d="m12 12l4.95-4.95c1.033-1.033 1.55-1.55 1.437-2.298c-.113-.749-.649-1.032-1.72-1.599A9.96 9.96 0 0 0 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10a10 10 0 0 0-.832-4"></svg:path></svg:g>`,
})
export class HugeiconsRadar01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
