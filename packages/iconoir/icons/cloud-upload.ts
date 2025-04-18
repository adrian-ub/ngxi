import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirCloudUploadIcon],svg[iconoir-cloud-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 22v-9m0 0l3.5 3.5M12 13l-3.5 3.5M20 17.607c1.494-.585 3-1.918 3-4.607c0-4-3.333-5-5-5c0-2 0-6-6-6S6 6 6 8c-1.667 0-5 1-5 5c0 2.689 1.506 4.022 3 4.607"></svg:path>`,
})
export class IconoirCloudUploadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
