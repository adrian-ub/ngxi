import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsNewspaperSolidIcon],svg[rivet-icons-newspaper-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 1H4v2H0v9a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3zM4 12a1 1 0 1 1-2 0V5h2zm8-8v2H8V4zm0 3v2H8V7z"></svg:path>`,
})
export class RivetIconsNewspaperSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
