import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerEyeDottedIcon],svg[tabler-eye-dotted-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0m11 0h.01M3 12h.01M5 15h.01M5 9h.01M19 15h.01M12 18h.01M12 6h.01M8 17h.01M8 7h.01M16 17h.01M16 7h.01M19 9h.01"></svg:path>`,
})
export class TablerEyeDottedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
