import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineHtmlIcon],svg[ic-outline-html-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 9H5v6H3.5v-2.5h-2V15H0V9h1.5v2h2zm14 0H13c-.55 0-1 .45-1 1v5h1.5v-4.5h1V14H16v-3.51h1V15h1.5v-5c0-.55-.45-1-1-1M11 9H6v1.5h1.75V15h1.5v-4.5H11zm13 6v-1.5h-2.5V9H20v6z"></svg:path>`,
})
export class IcOutlineHtmlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
