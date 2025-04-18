import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phLessThanLightIcon],svg[ph-less-than-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M205.42 202.57a6 6 0 0 1-8 2.85l-152-72a6 6 0 0 1 0-10.84l152-72a6 6 0 0 1 5.14 10.84L62 128l140.55 66.58a6 6 0 0 1 2.87 7.99"></svg:path>`,
})
export class PhLessThanLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
