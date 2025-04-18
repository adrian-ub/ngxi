import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phShuffleSimpleBoldIcon],svg[ph-shuffle-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 48v40a12 12 0 0 1-24 0V77l-31.23 31.2a12 12 0 0 1-17-17L179 60h-11a12 12 0 0 1 0-24h40a12 12 0 0 1 12 12m-12 108a12 12 0 0 0-12 12v11L56.49 39.51a12 12 0 0 0-17 17L179 196h-11a12 12 0 0 0 0 24h40a12 12 0 0 0 12-12v-40a12 12 0 0 0-12-12m-116.77-8.2l-51.72 51.71a12 12 0 0 0 17 17l51.71-51.72a12 12 0 0 0-17-17Z"></svg:path>`,
})
export class PhShuffleSimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
