import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phGifBoldIcon],svg[ph-gif-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M148 72v112a12 12 0 0 1-24 0V72a12 12 0 0 1 24 0m84 12a12 12 0 0 0 0-24h-56a12 12 0 0 0-12 12v112a12 12 0 0 0 24 0v-44h36a12 12 0 0 0 0-24h-36V84ZM96 116H72a12 12 0 0 0 0 24h12v12a20 20 0 0 1-40 0v-48a20 20 0 0 1 20-20c9.42 0 18.18 6.45 20.38 15a12 12 0 1 0 23.24-6C102.7 73.88 84.35 60 64 60a44.05 44.05 0 0 0-44 44v48a44 44 0 0 0 88 0v-24a12 12 0 0 0-12-12"></svg:path>`,
})
export class PhGifBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
