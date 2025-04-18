import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonEmailDuotoneIcon],svg[iconamoon-email-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m3 5l7.586 7.586a2 2 0 0 0 2.828 0L21 5v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" opacity=".16"></svg:path><svg:path fill="currentColor" d="M3 5V4a1 1 0 0 0-1 1zm18 0h1a1 1 0 0 0-1-1zM3 6h18V4H3zm17-1v12h2V5zm-1 13H5v2h14zM4 17V5H2v12zm1 1a1 1 0 0 1-1-1H2a3 3 0 0 0 3 3zm15-1a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m3 5l9 9l9-9"></svg:path></svg:g>`,
})
export class IconamoonEmailDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
