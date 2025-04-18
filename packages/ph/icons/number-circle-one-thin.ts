import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phNumberCircleOneThinIcon],svg[ph-number-circle-one-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m8-140v96a4 4 0 0 1-8 0V87.47l-17.78 11.86a4 4 0 1 1-4.44-6.66l24-16A4 4 0 0 1 136 80"></svg:path>`,
})
export class PhNumberCircleOneThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
