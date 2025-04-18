import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsArtboardIcon],svg[hugeicons-artboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 4.5V3m8 1.5V3m3.5 5H21m-1.5 8H21M8 21v-1.5m8 1.5v-1.5M3 8h1.5M3 16h1.5M8 11c0-1.414 0-2.121.44-2.56C8.878 8 9.585 8 11 8h2c1.414 0 2.121 0 2.56.44c.44.439.44 1.146.44 2.56v2c0 1.414 0 2.121-.44 2.56c-.439.44-1.146.44-2.56.44h-2c-1.414 0-2.121 0-2.56-.44C8 15.122 8 14.415 8 13z" color="currentColor"></svg:path>`,
})
export class HugeiconsArtboardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
