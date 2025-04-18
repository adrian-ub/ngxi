import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiHdrStrongIcon],svg[zmdi-hdr-strong-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M341 64q53 0 90.5 37.5T469 192t-37.5 90.5T341 320t-90.5-37.5T213 192t37.5-90.5T341 64M85.5 107q35.5 0 60.5 25t25 60t-25 60t-60.5 25T25 252T0 192t25-60t60.5-25m0 128q17.5 0 30-12.5T128 192t-12.5-30.5t-30-12.5t-30 12.5T43 192t12.5 30.5t30 12.5"></svg:path>`,
})
export class ZmdiHdrStrongIcon {
  readonly viewBox = input("0 0 472 384")
  readonly width = input("1.23em")
  readonly height = input("1em")
}
