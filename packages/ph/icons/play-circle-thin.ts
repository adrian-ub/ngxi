import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPlayCircleThinIcon],svg[ph-play-circle-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m46.12-95.39l-64-40A4 4 0 0 0 104 88v80a4 4 0 0 0 2.06 3.5a4.06 4.06 0 0 0 1.94.5a4 4 0 0 0 2.12-.61l64-40a4 4 0 0 0 0-6.78M112 160.78V95.22L164.45 128Z"></svg:path>`,
})
export class PhPlayCircleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
