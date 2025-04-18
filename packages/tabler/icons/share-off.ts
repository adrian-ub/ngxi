import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerShareOffIcon],svg[tabler-share-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0m12-6a3 3 0 1 0 6 0a3 3 0 1 0-6 0m.861 9.896a3 3 0 0 0 4.265 4.22m.578-3.417a3 3 0 0 0-1.507-1.45M8.7 10.7l1.336-.688M12.66 8.66L15.3 7.3m-6.6 6l6.6 3.4M3 3l18 18"></svg:path>`,
})
export class TablerShareOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
