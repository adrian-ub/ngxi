import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideBrainCircuitIcon],svg[lucide-brain-circuit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 5a3 3 0 1 0-5.997.125a4 4 0 0 0-2.526 5.77a4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></svg:path><svg:path d="M9 13a4.5 4.5 0 0 0 3-4M6.003 5.125A3 3 0 0 0 6.401 6.5m-2.924 4.396a4 4 0 0 1 .585-.396M6 18a4 4 0 0 1-1.967-.516M12 13h4m-4 5h6a2 2 0 0 1 2 2v1M12 8h8m-4 0V5a2 2 0 0 1 2-2"></svg:path><svg:circle cx="16" cy="13" r=".5"></svg:circle><svg:circle cx="18" cy="3" r=".5"></svg:circle><svg:circle cx="20" cy="21" r=".5"></svg:circle><svg:circle cx="20" cy="8" r=".5"></svg:circle></svg:g>`,
})
export class LucideBrainCircuitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
