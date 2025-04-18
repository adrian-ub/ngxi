import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonShare2DuotoneIcon],svg[iconamoon-share-2-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 5l-3-3m0 0L9 5m3-3v12M6 9H4v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9h-2"></svg:path>`,
})
export class IconamoonShare2DuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
