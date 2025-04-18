import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phStopCircleFillIcon],svg[ph-stop-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m32 132a4 4 0 0 1-4 4h-56a4 4 0 0 1-4-4v-56a4 4 0 0 1 4-4h56a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhStopCircleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
