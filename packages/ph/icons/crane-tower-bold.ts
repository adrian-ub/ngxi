import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCraneTowerBoldIcon],svg[ph-crane-tower-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 76H111.42L90.73 34.63A12 12 0 0 0 80 28H48a12 12 0 0 0-12 12v36H24a12 12 0 0 0 0 24h12v104H24a12 12 0 0 0 0 24h104a12 12 0 0 0 0-24h-12V100h88v80h-12v-4a12 12 0 0 0-24 0v8a20 20 0 0 0 20 20h20a20 20 0 0 0 20-20v-84h12a12 12 0 0 0 0-24M60 52h12.58l12 24H60Zm0 152v-40h32v40Zm32-64H60v-40h32Z"></svg:path>`,
})
export class PhCraneTowerBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
