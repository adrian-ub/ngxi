import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBracketsOffIcon],svg[tabler-brackets-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5v15h3m8-16h3v11m0 4v1h-3M3 3l18 18"></svg:path>`,
})
export class TablerBracketsOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
