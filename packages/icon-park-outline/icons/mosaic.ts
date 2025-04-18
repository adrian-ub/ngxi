import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineMosaicIcon],svg[icon-park-outline-mosaic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M44 36h-8v8h8zm-16 0h-8v8h8zm-16 0H4v8h8zm32-16h-8v8h8zm-16 0h-8v8h8zm-16 0H4v8h8zM44 4h-8v8h8zM28 4h-8v8h8zM12 4H4v8h8zm8 8h-8v8h8zm0 16h-8v8h8zm16-16h-8v8h8zm0 16h-8v8h8z"></svg:path>`,
})
export class IconParkOutlineMosaicIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
