import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icons8AudioFileIcon],svg[icons8-audio-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3v26h20V3zm2 2h16v22H8zm8 4.72v6.468A2.9 2.9 0 0 0 15 16c-1.645 0-3 1.355-3 3s1.355 3 3 3s3-1.355 3-3v-6.72l2.75.69l.5-1.94l-4-1zM15 18c.564 0 1 .436 1 1s-.436 1-1 1s-1-.436-1-1s.436-1 1-1"></svg:path>`,
})
export class Icons8AudioFileIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
