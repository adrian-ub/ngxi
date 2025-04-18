import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsVolume1Icon],svg[pixelarticons-volume-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 2h-2v2h-2v2H9v2H5v8h4v2h2v2h2v2h2zm-4 16v-2H9v-2H7v-4h2V8h2V6h2v12zm6-8h2v4h-2z"></svg:path>`,
})
export class PixelarticonsVolume1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
