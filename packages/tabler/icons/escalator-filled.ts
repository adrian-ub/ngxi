import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerEscalatorFilledIcon],svg[tabler-escalator-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.5 4a3.5 3.5 0 0 1 0 7h-1.086l-8.12 8.121a3 3 0 0 1-1.924.872L8.172 20H4.5a3.5 3.5 0 0 1 0-7h2.084l8.123-8.121a3 3 0 0 1 1.923-.872L16.828 4z"></svg:path>`,
})
export class TablerEscalatorFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
