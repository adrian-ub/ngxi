import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsTextIcon],svg[dashicons-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 3v2H2V3zm-6 4v2H2V7zm6 0v2h-4V7zM8 11v2H2v-2zm10 0v2h-8v-2zm-4 4v2H2v-2z"></svg:path>`,
})
export class DashiconsTextIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
