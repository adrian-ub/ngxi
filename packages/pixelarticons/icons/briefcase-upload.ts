import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsBriefcaseUploadIcon],svg[pixelarticons-briefcase-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 3h8v4h6v14h-5v-2h3V9H4v10h3v2H2V7h6zm6 2h-4v2h4zm-3 16h2v-6h2v2h2v-2h-2v-2h-2v-2h-2v2H9v2H7v2h2v-2h2z"></svg:path>`,
})
export class PixelarticonsBriefcaseUploadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
