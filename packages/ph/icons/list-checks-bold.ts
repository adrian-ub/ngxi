import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phListChecksBoldIcon],svg[ph-list-checks-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 128a12 12 0 0 1-12 12h-88a12 12 0 0 1 0-24h88a12 12 0 0 1 12 12M128 76h88a12 12 0 0 0 0-24h-88a12 12 0 0 0 0 24m88 104h-88a12 12 0 0 0 0 24h88a12 12 0 0 0 0-24M79.51 39.51L56 63l-7.51-7.52a12 12 0 0 0-17 17l16 16a12 12 0 0 0 17 0l32-32a12 12 0 0 0-17-17Zm0 64L56 127l-7.51-7.52a12 12 0 1 0-17 17l16 16a12 12 0 0 0 17 0l32-32a12 12 0 0 0-17-17Zm0 64L56 191l-7.51-7.52a12 12 0 1 0-17 17l16 16a12 12 0 0 0 17 0l32-32a12 12 0 0 0-17-17Z"></svg:path>`,
})
export class PhListChecksBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
