import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilMediaSkipBackwardIcon],svg[cil-media-skip-backward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M455.979 424.271A24.053 24.053 0 0 0 480 400.251V112.015a24 24 0 0 0-38.285-19.286L264 224.369V112.015a24 24 0 0 0-38.285-19.286L31.155 236.847a24 24 0 0 0 0 38.57l194.56 144.119A24 24 0 0 0 264 400.251V287.9l177.715 131.637a23.92 23.92 0 0 0 14.264 4.734M232 384.37L58.88 256.132L232 127.9ZM448 127.9v256.47L274.88 256.132Z"></svg:path>`,
})
export class CilMediaSkipBackwardIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
