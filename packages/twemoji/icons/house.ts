import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiHouseIcon],svg[twemoji-house-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#A0041E" d="M9.344 14.702h-2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5"></svg:path><svg:path fill="#FFE8B6" d="M5 16L18 3l13 13v17H5z"></svg:path><svg:path fill="#FFCC4D" d="M18 16h1v16h-1z"></svg:path><svg:path fill="#66757F" d="M31 17a1 1 0 0 1-.707-.293L18 4.414L5.707 16.707a.999.999 0 1 1-1.414-1.414l13-13a1 1 0 0 1 1.414 0l13 13A.999.999 0 0 1 31 17"></svg:path><svg:path fill="#66757F" d="M18 17a.999.999 0 0 1-.707-1.707l6.5-6.5a.999.999 0 1 1 1.414 1.414l-6.5 6.5A1 1 0 0 1 18 17"></svg:path><svg:path fill="#C1694F" d="M10 26h4v6h-4z"></svg:path><svg:path fill="#55ACEE" d="M10 17h4v4h-4zm12.5 0h4v4h-4zm0 9h4v4h-4z"></svg:path><svg:path fill="#5C913B" d="M33.5 33.5A1.5 1.5 0 0 1 32 35H4a1.5 1.5 0 0 1 0-3h28a1.5 1.5 0 0 1 1.5 1.5"></svg:path>`,
})
export class TwemojiHouseIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
