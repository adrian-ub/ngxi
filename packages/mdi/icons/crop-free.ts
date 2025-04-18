import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCropFreeIcon],svg[mdi-crop-free-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3h-4v2h4v4h2V5a2 2 0 0 0-2-2m0 16h-4v2h4a2 2 0 0 0 2-2v-4h-2M5 15H3v4a2 2 0 0 0 2 2h4v-2H5M3 5v4h2V5h4V3H5a2 2 0 0 0-2 2"></svg:path>`,
})
export class MdiCropFreeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
