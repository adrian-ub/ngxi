import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsBriefcaseSearch1Icon],svg[pixelarticons-briefcase-search-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3H8v4H2v14h7v-2H4V9h18V7h-6zm-2 4h-4V5h4zm0 4h8v2h-8zm0 10h-2v-8h2zm8 0v2h-8v-2zm0 0h2v-8h-2zm-6-6h2v2h2v2h-4z"></svg:path>`,
})
export class PixelarticonsBriefcaseSearch1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
