import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phLetterCirclePFillIcon],svg[ph-letter-circle-p-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M156 116a20 20 0 0 1-20 20h-24V96h24a20 20 0 0 1 20 20m76 12A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-60-12a36 36 0 0 0-36-36h-32a8 8 0 0 0-8 8v80a8 8 0 0 0 16 0v-16h24a36 36 0 0 0 36-36"></svg:path>`,
})
export class PhLetterCirclePFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
