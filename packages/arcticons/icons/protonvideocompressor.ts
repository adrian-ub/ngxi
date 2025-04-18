import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsProtonvideocompressorIcon],svg[arcticons-protonvideocompressor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.468 16.592A14.15 14.15 0 0 1 24.182 5.35a17 17 0 0 1 2.28 0a14 14 0 0 1 3.077.594m5.07 2.837a14.1 14.1 0 0 1 4.809 9.525a17 17 0 0 1 0 2.28a14.1 14.1 0 0 1-4.378 9.132m-4.947 3.043a14 14 0 0 1-3.631.78a17 17 0 0 1-2.28 0q-.497-.04-.985-.113c-.623-.094-1.612-.384-2.24-.422a1.91 1.91 0 0 0-2.083 1.107a6.7 6.7 0 0 0-.213 2.252v5.996a1.14 1.14 0 0 1-1.141 1.14h-5.198a1.14 1.14 0 0 1-1.141-1.14V22.128"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m33.056 20.585l-11.727 6.77a1.317 1.317 0 0 1-1.976-1.14V12.673a1.317 1.317 0 0 1 1.976-1.141l11.727 6.77a1.317 1.317 0 0 1 0 2.282Z"></svg:path><svg:circle cx="32.291" cy="7.137" r="2.636" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="32.623" cy="31.558" r="2.636" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="11.18" cy="19.444" r="2.636" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsProtonvideocompressorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
