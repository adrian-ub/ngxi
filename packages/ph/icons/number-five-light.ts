import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phNumberFiveLightIcon],svg[ph-number-five-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M174 160a54 54 0 0 1-90 40.25a6 6 0 1 1 8-8.94a42 42 0 1 0 .8-63.31a6 6 0 0 1-9.8-5.75l15.12-75.43A6 6 0 0 1 104 42h64a6 6 0 0 1 0 12h-59.08l-11.38 56.89A54 54 0 0 1 174 160"></svg:path>`,
})
export class PhNumberFiveLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
