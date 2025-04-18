import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiDialpadIcon],svg[zmdi-dialpad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M170.5 389q17.5 0 30 12.5T213 432t-12.5 30.5t-30 12.5t-30-12.5T128 432t12.5-30.5t30-12.5M42.5 5q17.5 0 30 12.5T85 48T72.5 78.5T42.5 91t-30-12.5T0 48t12.5-30.5T42.5 5m0 128q17.5 0 30 12.5T85 176t-12.5 30.5t-30 12.5t-30-12.5T0 176t12.5-30.5t30-12.5m0 128q17.5 0 30 12.5T85 304t-12.5 30.5t-30 12.5t-30-12.5T0 304t12.5-30.5t30-12.5m256-170q-17.5 0-30-12.5T256 48t12.5-30.5t30-12.5t30 12.5T341 48t-12.5 30.5t-30 12.5m-128 170q17.5 0 30 12.5T213 304t-12.5 30.5t-30 12.5t-30-12.5T128 304t12.5-30.5t30-12.5m128 0q17.5 0 30 12.5T341 304t-12.5 30.5t-30 12.5t-30-12.5T256 304t12.5-30.5t30-12.5m0-128q17.5 0 30 12.5T341 176t-12.5 30.5t-30 12.5t-30-12.5T256 176t12.5-30.5t30-12.5m-128 0q17.5 0 30 12.5T213 176t-12.5 30.5t-30 12.5t-30-12.5T128 176t12.5-30.5t30-12.5m0-128q17.5 0 30 12.5T213 48t-12.5 30.5t-30 12.5t-30-12.5T128 48t12.5-30.5t30-12.5"></svg:path>`,
})
export class ZmdiDialpadIcon {
  readonly viewBox = input("0 0 344 480")
  readonly width = input("0.72em")
  readonly height = input("1em")
}
