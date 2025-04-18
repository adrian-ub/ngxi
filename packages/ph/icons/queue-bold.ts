import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phQueueBoldIcon],svg[ph-queue-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 64a12 12 0 0 1 12-12h176a12 12 0 0 1 0 24H40a12 12 0 0 1-12-12m104 52H40a12 12 0 0 0 0 24h92a12 12 0 0 0 0-24m0 64H40a12 12 0 0 0 0 24h92a12 12 0 0 0 0-24m120-20a12 12 0 0 1-5.64 10.18l-64 40A12 12 0 0 1 164 200v-80a12 12 0 0 1 18.36-10.18l64 40A12 12 0 0 1 252 160m-34.64 0L188 141.65v36.7Z"></svg:path>`,
})
export class PhQueueBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
