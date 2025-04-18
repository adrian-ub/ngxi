import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riChatSearchFillIcon],svg[ri-chat-search-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v8.803A6 6 0 0 0 13.083 19zm17.495 2.535l-1.504-1.503a4 4 0 1 0-1.414 1.414l1.503 1.504zM21 18a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path>`,
})
export class RiChatSearchFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
