import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonContainerImageIcon],svg[carbon-container-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 10h12v2H10zm0 5h12v2H10zm0 5h12v2H10z"></svg:path><svg:path fill="currentColor" d="M26 28H6c-1.103 0-2-.897-2-2V6c0-1.103.897-2 2-2h20c1.103 0 2 .897 2 2v20c0 1.103-.897 2-2 2M6 6v20h20V6z"></svg:path>`,
})
export class CarbonContainerImageIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
