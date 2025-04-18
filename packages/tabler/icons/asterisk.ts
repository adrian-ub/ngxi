import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerAsteriskIcon],svg[tabler-asterisk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 12l8-4.5M12 12v9m0-9L4 7.5m8 4.5l8 4.5M12 3v9m0 0l-8 4.5"></svg:path>`,
})
export class TablerAsteriskIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
