import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerRippleIcon],svg[tabler-ripple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7q4.5-3 9 0c4.5 3 6 2 9 0M3 17q4.5-3 9 0c4.5 3 6 2 9 0M3 12q4.5-3 9 0c4.5 3 6 2 9 0"></svg:path>`,
})
export class TablerRippleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
