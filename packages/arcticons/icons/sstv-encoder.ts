import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSstvEncoderIcon],svg[arcticons-sstv-encoder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 5.5c20.082.828 36.172 16.918 37 37"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 11.07c17.007.82 30.61 14.423 31.43 31.43"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.501 16.642c13.932.808 25.05 11.925 25.857 25.857"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 22.218c10.857.79 19.492 9.423 20.282 20.28"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.501 27.802a16.366 16.366 0 0 1 14.697 14.696M5.502 33.407c4.7.7 8.39 4.39 9.09 9.09M5.503 39.8A4.58 4.58 0 0 1 8.2 42.497"></svg:path>`,
})
export class ArcticonsSstvEncoderIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
