import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiUploadCircleOutlineIcon],svg[mdi-upload-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 17v-2h8v2zm8-7l-4-4l-4 4h2.5v4h3v-4zm-4-8c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8s-3.58-8-8-8"></svg:path>`,
})
export class MdiUploadCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
