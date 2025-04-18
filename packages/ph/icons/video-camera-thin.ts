import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phVideoCameraThinIcon],svg[ph-video-camera-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M249.89 76.47a4 4 0 0 0-4.11.2L204 104.53V72a12 12 0 0 0-12-12H32a12 12 0 0 0-12 12v112a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12v-32.53l41.78 27.86A4 4 0 0 0 252 176V80a4 4 0 0 0-2.11-3.53M196 184a4 4 0 0 1-4 4H32a4 4 0 0 1-4-4V72a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Zm48-15.47l-40-26.67v-27.72l40-26.67Z"></svg:path>`,
})
export class PhVideoCameraThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
