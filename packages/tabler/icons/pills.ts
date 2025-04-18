import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPillsIcon],svg[tabler-pills-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8a5 5 0 1 0 10 0A5 5 0 1 0 3 8m10 9a4 4 0 1 0 8 0a4 4 0 1 0-8 0M4.5 4.5l7 7m8 3l-5 5"></svg:path>`,
})
export class TablerPillsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
