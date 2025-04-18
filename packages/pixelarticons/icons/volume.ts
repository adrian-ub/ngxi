import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsVolumeIcon],svg[pixelarticons-volume-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 2h2v20h-2v-2h-2v-2h2V6h-2V4h2zm-4 6V6h2v2zm-2 2h2V8H7v8h4v2h2v-2h-2v-2H9z"></svg:path>`,
})
export class PixelarticonsVolumeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
