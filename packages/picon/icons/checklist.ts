import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconChecklistIcon],svg[picon-checklist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5v1h4V5M4 1v1h4V1M1 1v1h1V1M1 5v1h1V5M0 7V4h3v3M0 3V0h3v3"></svg:path>`,
})
export class PiconChecklistIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
