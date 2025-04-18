import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsBriefcaseAccountIcon],svg[pixelarticons-briefcase-account-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3H8v4H2v14h20V7h-6zm-2 4h-4V5h4zM4 19V9h16v10zm6-8h4v3h-4zm-2 4h8v2H8z"></svg:path>`,
})
export class PixelarticonsBriefcaseAccountIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
