import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBackslashIcon],svg[tabler-backslash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 5l10 14"></svg:path>`,
})
export class TablerBackslashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
