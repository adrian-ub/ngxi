import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phDropHalfBottomBoldIcon],svg[ph-drop-half-bottom-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M134.88 6.17a12 12 0 0 0-13.76 0a259 259 0 0 0-42.18 39C50.85 77.43 36 111.63 36 144a92 92 0 0 0 184 0c0-77.36-81.64-135.4-85.12-137.83M191.61 168H64.39a67 67 0 0 1-3.9-16h135a67 67 0 0 1-3.88 16M96.7 61.29A249.4 249.4 0 0 1 128 31.11a249.4 249.4 0 0 1 31.3 30.18c14 16.19 30.27 39.89 35.2 66.71h-133c4.93-26.82 21.19-50.52 35.2-66.71M128 212a67.78 67.78 0 0 1-48.12-20h96.24A67.78 67.78 0 0 1 128 212"></svg:path>`,
})
export class PhDropHalfBottomBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
