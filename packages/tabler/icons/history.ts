import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerHistoryIcon],svg[tabler-history-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 8v4l2 2"></svg:path><svg:path d="M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5"></svg:path></svg:g>`,
})
export class TablerHistoryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
