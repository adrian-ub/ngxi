import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerOverlineIcon],svg[tabler-overline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 9v5a5 5 0 0 0 10 0V9M5 5h14"></svg:path>`,
})
export class TablerOverlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
