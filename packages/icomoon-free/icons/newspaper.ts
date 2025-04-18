import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeNewspaperIcon],svg[icomoon-free-newspaper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 4V2H0v11a1 1 0 0 0 1 1h13.5a1.5 1.5 0 0 0 1.5-1.5V4zm-1 9H1V3h12zM2 5h10v1H2zm6 2h4v1H8zm0 2h4v1H8zm0 2h3v1H8zM2 7h5v5H2z"></svg:path>`,
})
export class IcomoonFreeNewspaperIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
