import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonThumbnail1Icon],svg[carbon-thumbnail-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 30H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2m-4-6v4h4v-4zm14 6h-4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2m-4-6v4h4v-4zm14 6h-4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2m-4-6v4h4v-4zm4-4H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2M4 4v14h24V4z"></svg:path>`,
})
export class CarbonThumbnail1Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
