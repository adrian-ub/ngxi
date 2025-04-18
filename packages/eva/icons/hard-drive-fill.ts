import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[evaHardDriveFillIcon],svg[eva-hard-drive-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.79 11.34l-3.34-6.68A3 3 0 0 0 14.76 3H9.24a3 3 0 0 0-2.69 1.66l-3.34 6.68a2 2 0 0 0-.21.9V18a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-5.76a2 2 0 0 0-.21-.9M8 17a1 1 0 1 1 1-1a1 1 0 0 1-1 1m8 0h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2M5.62 11l2.72-5.45a1 1 0 0 1 .9-.55h5.52a1 1 0 0 1 .9.55L18.38 11Z"></svg:path>`,
})
export class EvaHardDriveFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
