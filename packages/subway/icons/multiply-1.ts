import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayMultiply1Icon],svg[subway-multiply-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M513 76.8L436.2 0L257 179.2L77.8 0L1 76.8L180.2 256L1 435.2L77.8 512L257 332.8L436.2 512l76.8-76.8L333.8 256z"></svg:path>`,
})
export class SubwayMultiply1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
