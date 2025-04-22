import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideRulerDimensionLineIcon],svg[lucide-ruler-dimension-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 15v-3.014M16 15v-3.014M20 6H4m16 2V4M4 8V4m4 11v-3.014"></svg:path><svg:rect width="18" height="7" x="3" y="12" rx="1"></svg:rect></svg:g>`,
})
export class LucideRulerDimensionLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
