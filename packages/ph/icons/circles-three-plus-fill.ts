import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCirclesThreePlusFillIcon],svg[ph-circles-three-plus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M120 80a40 40 0 1 1-40-40a40 40 0 0 1 40 40m56 40a40 40 0 1 0-40-40a40 40 0 0 0 40 40m-96 16a40 40 0 1 0 40 40a40 40 0 0 0-40-40m128 32h-24v-24a8 8 0 0 0-16 0v24h-24a8 8 0 0 0 0 16h24v24a8 8 0 0 0 16 0v-24h24a8 8 0 0 0 0-16"></svg:path>`,
})
export class PhCirclesThreePlusFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
