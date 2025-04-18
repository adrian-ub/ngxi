import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAiDnaIcon],svg[hugeicons-ai-dna-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.491 14.002c-4.49-2.4-4.49-3.6-4.49-4s0-1.6 4.49-4m0 8c-4.49 2.4-4.491 3.2-4.491 4m4.491-4c4.49-2.4 4.49-3.6 4.49-4s0-1.6-4.49-4m0 0c4.49-2.4 4.49-3.2 4.49-4m-4.49 4L5.308 4.746C3 3.283 3 2.643 3 2.002m11.412 9.999v1.979m-3.487 1.521h2.052m5.97 0H21m-2.052 2.974H21m-10.075 0h2.052m1.435 1.545V22m3.025-1.98V22m-.01-10v1.979m-3.45 5.988h3.97a1 1 0 0 0 1-1V14.98a1 1 0 0 0-1-1h-3.97a1 1 0 0 0-1 1v3.988a1 1 0 0 0 1 1" color="currentColor"></svg:path>`,
})
export class HugeiconsAiDnaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
