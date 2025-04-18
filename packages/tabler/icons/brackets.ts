import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBracketsIcon],svg[tabler-brackets-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 4H5v16h3m8-16h3v16h-3"></svg:path>`,
})
export class TablerBracketsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
