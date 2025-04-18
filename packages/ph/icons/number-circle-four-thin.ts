import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phNumberCircleFourThinIcon],svg[ph-number-circle-four-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m32-72h-12V80a4 4 0 0 0-7.16-2.46l-56 72A4 4 0 0 0 88 156h52v20a4 4 0 0 0 8 0v-20h12a4 4 0 0 0 0-8m-20 0H96.18L140 91.66Z"></svg:path>`,
})
export class PhNumberCircleFourThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
