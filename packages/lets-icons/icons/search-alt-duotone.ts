import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsSearchAltDuotoneIcon],svg[lets-icons-search-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M11 17a6 6 0 1 0 0-12a6 6 0 0 0 0 12M9.852 8.228A3 3 0 0 1 11 8a.5.5 0 0 0 0-1a4 4 0 0 0-4 4a.5.5 0 0 0 1 0a3 3 0 0 1 1.852-2.772"></svg:path><svg:path fill-opacity=".25" d="M17.928 15a.5.5 0 1 0-.866-.5a7 7 0 0 1-2.562 2.562a.5.5 0 1 0 .5.866A8 8 0 0 0 16.292 17l2.854 2.855a.5.5 0 0 0 .708-.708l-2.855-2.854A8 8 0 0 0 17.93 15"></svg:path></svg:g>`,
})
export class LetsIconsSearchAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
