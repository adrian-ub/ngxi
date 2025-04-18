import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerInfoSmallIcon],svg[tabler-info-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9h.01M11 12h1v4h1"></svg:path>`,
})
export class TablerInfoSmallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
