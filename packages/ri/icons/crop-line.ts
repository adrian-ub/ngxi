import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riCropLineIcon],svg[ri-crop-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 17v2H6a1 1 0 0 1-1-1V7H2V5h3V2h2v15zm2 5V7H9V5h9a1 1 0 0 1 1 1v11h3v2h-3v3z"></svg:path>`,
})
export class RiCropLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
