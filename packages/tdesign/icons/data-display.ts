import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignDataDisplayIcon],svg[tdesign-data-display-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 18H3v2h19zm-2-2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4v2h4v3h-3.5v2H20v3h-4v2zm-5-2h-4v-3h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H9v2h4v3h-2a2 2 0 0 0-2 2v5h6zm-7 0H6.5V6a2 2 0 0 0-2-2H3v2h1.5v8H3v2h5z"></svg:path>`,
})
export class TdesignDataDisplayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
