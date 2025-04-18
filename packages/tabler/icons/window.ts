import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerWindowIcon],svg[tabler-window-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3c-3.866 0-7 3.272-7 7v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V10c0-3.728-3.134-7-7-7M5 13h14M12 3v18"></svg:path>`,
})
export class TablerWindowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
