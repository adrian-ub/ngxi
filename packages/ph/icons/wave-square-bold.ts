import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phWaveSquareBoldIcon],svg[ph-wave-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M244 128v56a12 12 0 0 1-12 12H128a12 12 0 0 1-12-12V84H36v44a12 12 0 0 1-24 0V72a12 12 0 0 1 12-12h104a12 12 0 0 1 12 12v100h80v-44a12 12 0 0 1 24 0"></svg:path>`,
})
export class PhWaveSquareBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
