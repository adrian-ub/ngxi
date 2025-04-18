import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconNomadIcon],svg[devicon-nomad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#00ca8e" d="M64 0L8.569 31.984v64.013L64 128l55.431-32.003V31.984Zm24.697 70.393L73.924 78.9L56.08 69.212v20.424l-16.776 10.615V57.605l13.308-8.146l18.467 9.734V38.4l17.628-10.584Z"></svg:path>`,
})
export class DeviconNomadIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
