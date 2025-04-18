import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonAttachmentLightIcon],svg[iconamoon-attachment-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 15V9a6 6 0 1 1 12 0v8a4 4 0 1 1-8 0V9a2 2 0 1 1 4 0v8"></svg:path>`,
})
export class IconamoonAttachmentLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
