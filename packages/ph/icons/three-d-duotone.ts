import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phThreeDDuotoneIcon],svg[ph-three-d-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 48v160H32V48Z" opacity=".2"></svg:path><svg:path d="M96 148a20 20 0 0 0-20-20a8 8 0 0 1-6.55-12.59L88.63 88H56a8 8 0 0 1 0-16h48a8 8 0 0 1 6.55 12.59l-21 30A36 36 0 0 1 76 184a35.7 35.7 0 0 1-25.71-10.81A8 8 0 1 1 61.71 162A20 20 0 0 0 96 148m64-76a56 56 0 0 1 0 112h-24a8 8 0 0 1-8-8V80a8 8 0 0 1 8-8Zm0 16h-16v80h16a40 40 0 0 0 0-80M32 56h192a8 8 0 0 0 0-16H32a8 8 0 0 0 0 16m192 144H32a8 8 0 0 0 0 16h192a8 8 0 0 0 0-16"></svg:path></svg:g>`,
})
export class PhThreeDDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
