import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phWaveTriangleThinIcon],svg[ph-wave-triangle-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m235.24 130.34l-52 72a4 4 0 0 1-6.48 0L76 62.83l-48.76 67.51a4 4 0 1 1-6.48-4.68l52-72a4 4 0 0 1 6.48 0L180 193.17l48.76-67.51a4 4 0 0 1 6.48 4.68"></svg:path>`,
})
export class PhWaveTriangleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
