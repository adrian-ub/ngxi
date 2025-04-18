import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bytesizeVolumeIcon],svg[bytesize-volume-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 16c0-8-5-14-5-14l-7 8H2v12h6l7 8s5-6 5-14m1-14s4 4 4 14s-4 14-4 14m6-26s3 4 3 12s-3 12-3 12"></svg:path>`,
})
export class BytesizeVolumeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
