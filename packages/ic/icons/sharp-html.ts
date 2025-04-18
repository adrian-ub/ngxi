import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpHtmlIcon],svg[ic-sharp-html-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 9H5v6H3.5v-2.5h-2V15H0V9h1.5v2h2zm15 0H12v6h1.5v-4.5h1V14H16v-3.51h1V15h1.5zM11 9H6v1.5h1.75V15h1.5v-4.5H11zm13 6v-1.5h-2.5V9H20v6z"></svg:path>`,
})
export class IcSharpHtmlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
