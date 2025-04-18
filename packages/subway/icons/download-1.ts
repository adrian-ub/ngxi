import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayDownload1Icon],svg[subway-download-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M315.1 4.1v229.2h98.5L256 410.5L98.5 233.3H197V4.1C84.1 30.8 0 132 0 253c0 141.4 114.6 256 256 256s256-114.6 256-256c0-121-84.1-222.2-196.9-248.9"></svg:path>`,
})
export class SubwayDownload1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
