import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerToiletPaperIcon],svg[tabler-toilet-paper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10a3 7 0 1 0 6 0a3 7 0 1 0-6 0m18 0c0-3.866-1.343-7-3-7M6 3h12m3 7v10l-3-1l-3 2l-3-3l-3 2V10m-3 0h.01"></svg:path>`,
})
export class TablerToiletPaperIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
