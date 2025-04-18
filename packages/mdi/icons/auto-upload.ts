import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiAutoUploadIcon],svg[mdi-auto-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.35 12.65L6.5 9l1.15 3.65M5.5 7l-3.2 9h1.9l.7-2h3.2l.7 2h1.9L7.5 7M11 20h11v-2H11m3-2h5v-5h3l-5.5-5.5L11 11h3z"></svg:path>`,
})
export class MdiAutoUploadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
