import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPeaceIcon],svg[tabler-peace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0m9-9v18m0-9l6.3 6.3M12 12l-6.3 6.3"></svg:path>`,
})
export class TablerPeaceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
