import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phQueueDuotoneIcon],svg[ph-queue-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m240 160l-64 40v-80Z" opacity=".2"></svg:path><svg:path d="M32 64a8 8 0 0 1 8-8h176a8 8 0 0 1 0 16H40a8 8 0 0 1-8-8m104 56H40a8 8 0 0 0 0 16h96a8 8 0 0 0 0-16m0 64H40a8 8 0 0 0 0 16h96a8 8 0 0 0 0-16m112-24a8 8 0 0 1-3.76 6.78l-64 40A8 8 0 0 1 168 200v-80a8 8 0 0 1 12.24-6.78l64 40A8 8 0 0 1 248 160m-23.09 0L184 134.43v51.14Z"></svg:path></svg:g>`,
})
export class PhQueueDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
