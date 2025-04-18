import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTrayThinIcon],svg[ph-tray-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 36H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12M48 44h160a4 4 0 0 1 4 4v108h-32.69a12 12 0 0 0-8.48 3.51l-19.32 19.32a4 4 0 0 1-2.82 1.17h-41.38a4 4 0 0 1-2.82-1.17l-19.32-19.32a12 12 0 0 0-8.48-3.51H44V48a4 4 0 0 1 4-4m160 168H48a4 4 0 0 1-4-4v-44h32.69a4 4 0 0 1 2.82 1.17l19.32 19.32a12 12 0 0 0 8.48 3.51h41.38a12 12 0 0 0 8.48-3.51l19.32-19.32a4 4 0 0 1 2.82-1.17H212v44a4 4 0 0 1-4 4"></svg:path>`,
})
export class PhTrayThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
