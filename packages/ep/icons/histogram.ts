import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[epHistogramIcon],svg[ep-histogram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M416 896V128h192v768zm-288 0V448h192v448zm576 0V320h192v576z"></svg:path>`,
})
export class EpHistogramIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
