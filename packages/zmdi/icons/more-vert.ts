import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiMoreVertIcon],svg[zmdi-more-vert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M42.5 107q-17.5 0-30-12.5T0 64t12.5-30.5t30-12.5t30 12.5T85 64T72.5 94.5t-30 12.5m0 42q17.5 0 30 12.5T85 192t-12.5 30.5t-30 12.5t-30-12.5T0 192t12.5-30.5t30-12.5m0 128q17.5 0 30 12.5T85 320t-12.5 30.5t-30 12.5t-30-12.5T0 320t12.5-30.5t30-12.5"></svg:path>`,
})
export class ZmdiMoreVertIcon {
  readonly viewBox = input("0 0 88 384")
  readonly width = input("0.23em")
  readonly height = input("1em")
}
