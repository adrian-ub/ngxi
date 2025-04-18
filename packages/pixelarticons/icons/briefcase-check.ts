import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsBriefcaseCheckIcon],svg[pixelarticons-briefcase-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3H8v4H2v14h20V7h-6zm-2 4h-4V5h4zM4 19V9h16v10zm10-8h2v2h-2zm-2 4v-2h2v2zm-2 0h2v2h-2zm0 0H8v-2h2z"></svg:path>`,
})
export class PixelarticonsBriefcaseCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
