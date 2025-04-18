import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonNameSpaceIcon],svg[carbon-name-space-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 12H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h3v2H4v4h3zm2-2h6v2H9zm8 0h6v2h-6zm11 2h-3v-2h3V6h-3V4h3a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2M17 4h6v2h-6zM9 4h6v2H9zm19 24H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2M4 22v4h24v-4zm-2-7h28v2H2z"></svg:path>`,
})
export class CarbonNameSpaceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
