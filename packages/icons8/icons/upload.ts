import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icons8UploadIcon],svg[icons8-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 3.594l-.72.687l-7 7l1.44 1.44L15 7.436V24h2V7.437l5.28 5.282l1.44-1.44l-7-7zM7 26v2h18v-2z"></svg:path>`,
})
export class Icons8UploadIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
