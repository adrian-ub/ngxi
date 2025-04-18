import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonMediaLibraryFilledIcon],svg[carbon-media-library-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M13 15v8l7-4z"></svg:path><svg:path fill="currentColor" d="M26 10H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2M13 23v-8l7 4zM6 6h20v2H6zm2-4h16v2H8z"></svg:path>`,
})
export class CarbonMediaLibraryFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
