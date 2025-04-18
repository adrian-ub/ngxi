import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7RectangleFillOnRectangleFillIcon],svg[f7-rectangle-fill-on-rectangle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.688 23.11c0-5.994 3.177-9.128 9.214-9.128H45.41v-.53c0-4.363-2.224-6.565-6.63-6.565H6.65C2.225 6.887 0 9.089 0 13.452v22.303c0 4.363 2.224 6.544 6.65 6.544h1.038Zm9.553 29.398h32.108c4.406 0 6.651-2.203 6.651-6.566V23.428c0-4.342-2.245-6.545-6.65-6.545H17.24c-4.447 0-6.65 2.182-6.65 6.545v22.514c0 4.364 2.203 6.566 6.65 6.566"></svg:path>`,
})
export class F7RectangleFillOnRectangleFillIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
