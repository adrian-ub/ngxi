import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsEditCropIcon],svg[zondicons-edit-crop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 16H6a2 2 0 0 1-2-2V6H0V4h4V0h2v14h14v2h-4v4h-2zm0-3V6H7V4h7a2 2 0 0 1 2 2v7z"></svg:path>`,
})
export class ZondiconsEditCropIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
