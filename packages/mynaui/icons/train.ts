import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiTrainIcon],svg[mynaui-train-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 18H8m8 0l2 3m-2-3a3 3 0 0 0 3-3v-4M8 18l-2 3m2-3a3 3 0 0 1-3-3v-4m3 3v1m8-1v1M5 11h7m-7 0V6m7 5h7m-7 0V6m7 5V6m-7 0H5m7 0h7M5 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3"></svg:path>`,
})
export class MynauiTrainIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
