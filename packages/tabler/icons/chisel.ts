import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerChiselIcon],svg[tabler-chisel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14 14l1.5 1.5m2.847.075l2.08 2.079a1.96 1.96 0 0 1-2.773 2.772l-2.08-2.079a1.96 1.96 0 0 1 2.773-2.772M3 6l3-3l7.414 7.414A2 2 0 0 1 14 11.828V14h-2.172a2 2 0 0 1-1.414-.586z"></svg:path>`,
})
export class TablerChiselIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
