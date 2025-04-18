import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPercentLightIcon],svg[ph-percent-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m204.24 60.23l-144 144a6 6 0 0 1-8.48-8.48l144-144a6 6 0 1 1 8.48 8.49ZM52 100a34 34 0 1 1 24 10a33.78 33.78 0 0 1-24-10m2-24a22 22 0 1 0 6.44-15.56A21.86 21.86 0 0 0 54 76m160 104a34 34 0 1 1-10-24a33.78 33.78 0 0 1 10 24m-12 0a21.87 21.87 0 0 0-6.44-15.56A22 22 0 1 0 202 180"></svg:path>`,
})
export class PhPercentLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
