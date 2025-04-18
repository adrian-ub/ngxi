import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phDownloadLightIcon],svg[ph-download-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M238 136v64a14 14 0 0 1-14 14H32a14 14 0 0 1-14-14v-64a14 14 0 0 1 14-14h40a6 6 0 0 1 0 12H32a2 2 0 0 0-2 2v64a2 2 0 0 0 2 2h192a2 2 0 0 0 2-2v-64a2 2 0 0 0-2-2h-40a6 6 0 0 1 0-12h40a14 14 0 0 1 14 14m-114.24-3.76a6 6 0 0 0 8.48 0l48-48a6 6 0 0 0-8.48-8.48L134 113.51V24a6 6 0 0 0-12 0v89.51L84.24 75.76a6 6 0 0 0-8.48 8.48ZM198 168a10 10 0 1 0-10 10a10 10 0 0 0 10-10"></svg:path>`,
})
export class PhDownloadLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
