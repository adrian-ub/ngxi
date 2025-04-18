import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCubeSendIcon],svg[tabler-cube-send-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m16 12.5l-5-3l5-3l5 3V15l-5 3z"></svg:path><svg:path d="M11 9.5V15l5 3m0-5.455l5-3.03M7 9H2m5 3H4m3 3H6"></svg:path></svg:g>`,
})
export class TablerCubeSendIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
