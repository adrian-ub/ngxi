import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineDressingTableIcon],svg[streamline-dressing-table-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2 7.5v5a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-5M.5 7.5h13M7 7.5v6M9.5 10v1m-5-1v1M12 7.5v-2a5 5 0 0 0-10 0v2"></svg:path>`,
})
export class StreamlineDressingTableIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
