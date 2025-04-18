import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideListCollapseIcon],svg[lucide-list-collapse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m3 10l2.5-2.5L3 5m0 14l2.5-2.5L3 14m7-8h11m-11 6h11m-11 6h11"></svg:path>`,
})
export class LucideListCollapseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
