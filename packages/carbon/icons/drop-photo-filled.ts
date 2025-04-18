import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonDropPhotoFilledIcon],svg[carbon-drop-photo-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="19" cy="22" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M27 16h-3.28l-.543-1.633A2 2 0 0 0 21.279 13h-4.558a2 2 0 0 0-1.898 1.368L14.28 16H11a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2m-8 10a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4"></svg:path><svg:path fill="none" d="M19 26a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4m0-6a2 2 0 1 0 2 2a2 2 0 0 0-2-2"></svg:path><svg:path fill="currentColor" d="M27 11h2v2h-2zm0-4h2v2h-2zm0-4h2v2h-2zm-4 0h2v2h-2zm-4 0h2v2h-2zm-4 0h2v2h-2zm-4 0h2v2h-2zM7 3h2v2H7zM3 3h2v2H3zm0 4h2v2H3zm0 4h2v2H3zm0 4h2v2H3zm0 4h2v2H3zm0 4h2v2H3zm0 4h2v2H3z"></svg:path>`,
})
export class CarbonDropPhotoFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
