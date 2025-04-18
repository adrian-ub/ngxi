import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAiBrain02Icon],svg[hugeicons-ai-brain-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 4.5a2.5 2.5 0 0 0-5 0a3 3 0 0 0-2.567 4.554a3.001 3.001 0 0 0 0 5.893A3 3 0 0 0 7 19.5a2.5 2.5 0 0 0 5-.001"></svg:path><svg:path d="M12 19.5a2.5 2.5 0 0 0 5 0a3 3 0 0 0 2.567-4.553a3.001 3.001 0 0 0 0-5.893A3 3 0 0 0 17 4.5a2.5 2.5 0 0 0-5-.001"></svg:path><svg:path d="M10.487 7.001V8.98M7 10.501h2.052m5.971 0h2.052m-2.052 2.974h2.052M7 13.475h2.052m1.435 1.545V17m3.025-1.98V17m-.009-10v1.98m-3.45 5.989h3.971a1 1 0 0 0 1-1V9.98a1 1 0 0 0-1-1h-3.971a1 1 0 0 0-1 1v3.989a1 1 0 0 0 1 1"></svg:path></svg:g>`,
})
export class HugeiconsAiBrain02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
