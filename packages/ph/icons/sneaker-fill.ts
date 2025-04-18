import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSneakerFillIcon],svg[ph-sneaker-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m228.65 129.11l-28.06-9.35a4 4 0 0 0-2.63 0l-43.23 15.72a8.1 8.1 0 0 1-2.73.52a8 8 0 0 1-7.71-5.88a8.17 8.17 0 0 1 5.22-9.73l18.49-6.72a2.54 2.54 0 0 0-.06-4.8a23.9 23.9 0 0 1-8.8-5.25a4 4 0 0 0-4.17-.91l-24.22 8.8a8 8 0 0 1-10.44-5.39a8.17 8.17 0 0 1 5.22-9.73L146 88.93a4 4 0 0 0 2.31-5.34l-3.06-7.16a4 4 0 0 0-5.05-2.19l-25.5 9.27a8 8 0 0 1-10.44-5.39a8.17 8.17 0 0 1 5.22-9.73l24-8.73a4 4 0 0 0 2.31-5.33l-5.4-12.73v-.1a16 16 0 0 0-20.14-8.5L34.53 60.49A16.05 16.05 0 0 0 24 75.53V192a16 16 0 0 0 16 16h200a16 16 0 0 0 16-16v-24.94a40 40 0 0 0-27.35-37.95M240 192H40v-16h200Z"></svg:path>`,
})
export class PhSneakerFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
