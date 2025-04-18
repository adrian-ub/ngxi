import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsBriefcaseSearchIcon],svg[pixelarticons-briefcase-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3H8v4H2v14h10v-2H4V9h16v2h2V7h-6zm-2 4h-4V5h4zm6 6h-6v6h6v2h2v-2h-2zm-4 4v-2h2v2z"></svg:path>`,
})
export class PixelarticonsBriefcaseSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
