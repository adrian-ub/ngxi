import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riArrowLeftUpLongFillIcon],svg[ri-arrow-left-up-long-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.364 19.778l1.414-1.414l-9.606-9.607L14 4.93H4.929V14l3.828-3.828z"></svg:path>`,
})
export class RiArrowLeftUpLongFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
