import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineMusicRhythmIcon],svg[icon-park-outline-music-rhythm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 42h5m-5-6h5m-5-6h5m-5-6h5m6 18h5m-5-6h5m-5-6h5m-5-6h5m-5-6h5m-5-6h5m-5-6h5m6 36h5m6 0h5m-16-6h5m6 0h5m-16-6h5m6 0h5m-5-6h5m-5-6h5"></svg:path>`,
})
export class IconParkOutlineMusicRhythmIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
