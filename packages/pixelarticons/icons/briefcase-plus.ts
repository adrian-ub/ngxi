import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsBriefcasePlusIcon],svg[pixelarticons-briefcase-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 3h8v4h6v4h-2V9H4v10h8v2H2V7h6zm2 4h4V5h-4zm7 14h2v-3h3v-2h-3v-3h-2v3h-3v2h3z"></svg:path>`,
})
export class PixelarticonsBriefcasePlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
