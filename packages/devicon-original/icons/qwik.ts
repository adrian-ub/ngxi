import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconOriginalQwikIcon],svg[devicon-original-qwik-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#18B6F6" d="m95.672 112.555l-17.43-17.34l-.246.043v-.184L40.93 58.418l9.152-8.82l-5.383-30.84L19.23 50.355c-4.324 4.368-5.156 11.508-2.023 16.75l15.918 26.422c2.434 4.051 6.258 6.657 11.598 6.465c11.304-.402 16.273-.402 16.273-.402l34.668 12.957l.008.012Zm0 0"></svg:path><svg:path fill="#AC7EF4" d="M104.285 63.96c2.508-5.175 3.406-9.702.93-14.253l-3.524-6.484l-1.828-3.328l-.71-1.297l-.067.074L89.5 22.043a13.397 13.397 0 0 0-11.766-6.723l-8.406.239l-25.094.066a13.46 13.46 0 0 0-11.511 6.633L17.477 52.539l27.285-33.945l35.793 39.36l-6.407 6.491l3.825 30.793l.054-.07v.09h-.054l.074.074l2.984 2.906L95.47 112.34c.605.586 1.59-.117 1.187-.84L87.73 93.937"></svg:path><svg:path fill="#FFF" d="m80.64 57.855l-35.886-39.16l5.098 30.664l-9.133 8.864L77.906 95.18L74.555 64.5l6.086-6.633Zm0 0"></svg:path>`,
})
export class DeviconOriginalQwikIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
