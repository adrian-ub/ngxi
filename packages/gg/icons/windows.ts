import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggWindowsIcon],svg[gg-windows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3 5.549l7.195-.967v7.029l-7.188.054zm7.195 6.842v7.105l-7.19-.985v-6.12zm.918-7.935L20.998 3v8.533l-9.885.078zM21 12.505L20.998 21l-9.885-1.353v-7.142z"></svg:path>`,
})
export class GgWindowsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
