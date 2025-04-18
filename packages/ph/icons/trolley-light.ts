import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTrolleyLightIcon],svg[ph-trolley-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M86 224a14 14 0 1 1-14-14a14 14 0 0 1 14 14m130-14a14 14 0 1 0 14 14a14 14 0 0 0-14-14m24-32H54V75.31a13.94 13.94 0 0 0-4.1-9.9L28.24 43.76a6 6 0 1 0-8.48 8.48L41.41 73.9a2 2 0 0 1 .59 1.41V178H32a6 6 0 0 0 0 12h208a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhTrolleyLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
