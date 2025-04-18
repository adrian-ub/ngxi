import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneFilterIcon],svg[icon-park-twotone-filter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTFilter0"><svg:path fill="#555" stroke="#fff" stroke-linejoin="round" stroke-width="4" d="m6 9l14.4 16.818v12.626L27.6 42V25.818L42 9z"></svg:path></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTFilter0)"></svg:path>`,
})
export class IconParkTwotoneFilterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
