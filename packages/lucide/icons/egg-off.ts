import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideEggOffIcon],svg[lucide-egg-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.399 6.399C5.362 8.157 4.65 10.189 4.5 12c-.37 4.43 1.27 9.95 7.5 10c3.256-.026 5.259-1.547 6.375-3.625m1.157-4.5A14 14 0 0 0 19.5 12c-.36-4.34-3.95-9.96-7.5-10c-1.04.012-2.082.502-3.046 1.297M2 2l20 20"></svg:path>`,
})
export class LucideEggOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
