import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsUpIcon],svg[ls-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M360 337L115 582L0 464l354-355l363 363l-112 112z"></svg:path>`,
})
export class LsUpIcon {
  readonly viewBox = input("0 0 717 614")
  readonly width = input("1.17em")
  readonly height = input("1em")
}
