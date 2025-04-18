import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeBaffledIcon],svg[icomoon-free-baffled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M8 1.5a6.5 6.5 0 1 1 0 13a6.5 6.5 0 0 1 0-13"></svg:path><svg:path fill="currentColor" d="M6 6.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0"></svg:path><svg:path fill="currentColor" d="M5.5 5a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 5.5 5m0-1C4.122 4 3 5.122 3 6.5S4.122 9 5.5 9S8 7.878 8 6.5S6.878 4 5.5 4M11 6.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0"></svg:path><svg:path fill="currentColor" d="M10.5 5a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 10.5 5m0-1C9.121 4 8 5.122 8 6.5S9.121 9 10.5 9S13 7.878 13 6.5S11.879 4 10.5 4M6 11h4v1H6z"></svg:path>`,
})
export class IcomoonFreeBaffledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
