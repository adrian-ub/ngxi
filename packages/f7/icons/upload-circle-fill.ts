import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7UploadCircleFillIcon],svg[f7-upload-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M28 52C14.745 52 4 41.255 4 28S14.745 4 28 4s24 10.745 24 24s-10.745 24-24 24m3.356-19.714V19.27l3.143 3.143a1.713 1.713 0 0 0 2.428.004c.67-.67.669-1.756-.003-2.428l-6.054-6.054a1.72 1.72 0 0 0-1.504-.484a1.7 1.7 0 0 0-.952.484l-6.054 6.054a1.713 1.713 0 0 0-.004 2.428c.67.67 1.756.668 2.428-.004l3.143-3.143v13.016A4.286 4.286 0 1 1 23.642 28a1.714 1.714 0 1 0 0-3.428a7.714 7.714 0 1 0 7.714 7.714"></svg:path>`,
})
export class F7UploadCircleFillIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
