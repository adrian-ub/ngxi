import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsBIcon],svg[healthicons-b-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 12a2 2 0 0 1 2-2h10a8 8 0 0 1 5.292 14A8 8 0 0 1 26 38H16a2 2 0 0 1-2-2zm12 10a4 4 0 0 0 0-8h-8v8zm-8 4h8a4 4 0 0 1 0 8h-8z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsBIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
