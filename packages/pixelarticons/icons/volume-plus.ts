import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsVolumePlusIcon],svg[pixelarticons-volume-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2h2v20h-2v-2H8v-2h2V6H8V4h2zM6 8V6h2v2zm0 8H2V8h4v2H4v4h2zm0 0v2h2v-2zm13-5h3v2h-3v3h-2v-3h-3v-2h3V8h2z"></svg:path>`,
})
export class PixelarticonsVolumePlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
