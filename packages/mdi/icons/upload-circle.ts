import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiUploadCircleIcon],svg[mdi-upload-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2m4 15v-2H8v2zm0-7l-4-4l-4 4h2.5v4h3v-4z"></svg:path>`,
})
export class MdiUploadCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
