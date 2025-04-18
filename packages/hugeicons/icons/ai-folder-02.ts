import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAiFolder02Icon],svg[hugeicons-ai-folder-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 6.001h9.75c2.107 0 3.16 0 3.917.506a3 3 0 0 1 .827.827c.506.757.506 1.81.506 3.917c0 3.511 0 5.267-.843 6.528q-.273.41-.622.758m-17.07 0C2 17.072 2 14.715 2 10V6.945c0-1.816 0-2.724.38-3.406a3 3 0 0 1 1.158-1.158c.682-.38 1.59-.38 3.406-.38c1.164 0 1.746 0 2.255.191c1.163.436 1.643 1.493 2.168 2.542L12 6.001m-1.55 6v1.979m-3.487 1.521h2.052m5.971 0h2.052m-2.052 2.974h2.052m-10.075 0h2.052m1.435 1.545V22m3.025-1.98V22m-.01-10v1.979m-3.45 5.988h3.971a1 1 0 0 0 1-1V14.98a1 1 0 0 0-1-1h-3.971a1 1 0 0 0-1 1v3.988a1 1 0 0 0 1 1" color="currentColor"></svg:path>`,
})
export class HugeiconsAiFolder02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
