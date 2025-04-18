import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerTextDirectionRtlIcon],svg[tabler-text-direction-rtl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 4H9.5a3.5 3.5 0 0 0 0 7h.5m4 4V4m-4 11V4M5 19h14M7 21l-2-2l2-2"></svg:path>`,
})
export class TablerTextDirectionRtlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
