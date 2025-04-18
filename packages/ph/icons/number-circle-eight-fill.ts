import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phNumberCircleEightFillIcon],svg[ph-number-circle-eight-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M148 152a20 20 0 1 1-20-20a20 20 0 0 1 20 20m-20-36a16 16 0 1 0-16-16a16 16 0 0 0 16 16m104 12A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-68 24a35.93 35.93 0 0 0-14.19-28.61a32 32 0 1 0-43.62 0A36 36 0 1 0 164 152"></svg:path>`,
})
export class PhNumberCircleEightFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
