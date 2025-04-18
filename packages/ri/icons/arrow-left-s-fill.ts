import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riArrowLeftSFillIcon],svg[ri-arrow-left-s-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8 12l6-6v12z"></svg:path>`,
})
export class RiArrowLeftSFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
