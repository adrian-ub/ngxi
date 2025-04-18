import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerTransitionLeftIcon],svg[tabler-transition-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 21a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3m15 3v12a3 3 0 0 1-6 0V6a3 3 0 0 1 6 0m-6 6H7m3-3l-3 3l3 3"></svg:path>`,
})
export class TablerTransitionLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
