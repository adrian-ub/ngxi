import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonMediaLibraryIcon],svg[carbon-media-library-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 15v8l7-4z"></svg:path><svg:path fill="currentColor" d="M26 28H6a2 2 0 0 1-2-2V12a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2M6 12v14h20V12zm0-6h20v2H6zm2-4h16v2H8z"></svg:path>`,
})
export class CarbonMediaLibraryIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
