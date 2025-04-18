import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerGraphOffIcon],svg[tabler-graph-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8 4h10a2 2 0 0 1 2 2v10m-.586 3.414A2 2 0 0 1 18 20H6a2 2 0 0 1-2-2V6c0-.547.22-1.043.576-1.405"></svg:path><svg:path d="m7 14l3-3l2 2l.5-.5m2-2l.5-.5l2 2M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerGraphOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
