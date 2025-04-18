import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsTrackChangesIcon],svg[pixelarticons-track-changes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 2H2v20h20V4h-2v16H4V4h7v2H6v12h12V8h-2v8H8V8h3v2h-1v4h4v-4h-1V2z"></svg:path>`,
})
export class PixelarticonsTrackChangesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
