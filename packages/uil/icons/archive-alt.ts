import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilArchiveAltIcon],svg[uil-archive-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 13h4a1 1 0 0 0 0-2h-4a1 1 0 0 0 0 2m9-10H5a3 3 0 0 0-1 5.82V18a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8.82A3 3 0 0 0 19 3m-1 15a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h12Zm1-11H5a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2"></svg:path>`,
})
export class UilArchiveAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
