import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerAsteriskSimpleIcon],svg[tabler-asterisk-simple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 12V3m0 9L3 9.5m9 2.5l9-2.5M12 12l6 8.5M12 12l-6 8.5"></svg:path>`,
})
export class TablerAsteriskSimpleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
