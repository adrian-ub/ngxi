import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7CheckmarkAltCircleIcon],svg[f7-checkmark-alt-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 4c13.255 0 24 10.745 24 24S41.255 52 28 52S4 41.255 4 28S14.745 4 28 4m0 4C16.954 8 8 16.954 8 28s8.954 20 20 20s20-8.954 20-20S39.046 8 28 8m10.788 11.93c.67.67.67 1.756 0 2.425l-13.36 13.36a1.715 1.715 0 0 1-2.424 0l-5.645-5.646a1.714 1.714 0 0 1 2.425-2.424l3.22 3.22c.67.67 1.755.67 2.425 0l10.934-10.934c.67-.67 1.755-.67 2.425 0"></svg:path>`,
})
export class F7CheckmarkAltCircleIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
