import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidScreenshotTwoIcon],svg[icon-park-solid-screenshot-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 24V4h40v20"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M10 44a6 6 0 1 0 0-12a6 6 0 0 0 0 12" clip-rule="evenodd"></svg:path><svg:path d="M36 12C20.39 33.266 15.805 40.68 14.243 42.243a6 6 0 0 1-8.486 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M38 44a6 6 0 1 0 0-12a6 6 0 0 0 0 12" clip-rule="evenodd"></svg:path><svg:path d="M42.243 42.243a6 6 0 0 1-8.486 0C32.195 40.68 27.61 33.266 12 12"></svg:path></svg:g>`,
})
export class IconParkSolidScreenshotTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
