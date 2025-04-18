import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerFlagUpIcon],svg[tabler-flag-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.138 15.241A5 5 0 0 1 12 14a5 5 0 0 0-7 0V5a5 5 0 0 1 7 0a5 5 0 0 0 7 0v7M5 21v-7m14 8v-6m3 3l-3-3l-3 3"></svg:path>`,
})
export class TablerFlagUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
