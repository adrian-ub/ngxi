import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phWaveTriangleBoldIcon],svg[ph-wave-triangle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m241.73 135l-52 72a12 12 0 0 1-19.46 0L76 76.5L33.73 135a12 12 0 1 1-19.46-14l52-72a12 12 0 0 1 19.46 0L180 179.5l42.27-58.5a12 12 0 1 1 19.46 14"></svg:path>`,
})
export class PhWaveTriangleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
