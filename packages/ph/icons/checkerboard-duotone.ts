import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCheckerboardDuotoneIcon],svg[ph-checkerboard-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M40 128h88v88H48a8 8 0 0 1-8-8Zm168-88h-80v88h88V48a8 8 0 0 0-8-8" opacity=".2"></svg:path><svg:path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 88h-72V48h72Zm-88-72v72H48V48Zm-72 88h72v72H48Zm160 72h-72v-72h72z"></svg:path></svg:g>`,
})
export class PhCheckerboardDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
