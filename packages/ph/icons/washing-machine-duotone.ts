import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phWashingMachineDuotoneIcon],svg[ph-washing-machine-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M184 128a56 56 0 1 1-56-56a56 56 0 0 1 56 56" opacity=".2"></svg:path><svg:path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176H48V48h160zM128 64a64 64 0 1 0 64 64a64.07 64.07 0 0 0-64-64m0 112a48 48 0 1 1 48-48a48.05 48.05 0 0 1-48 48m72-108a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-74.34 49.66l-16 16a8 8 0 0 1-11.32-11.32l16-16a8 8 0 0 1 11.32 11.32m32-3.32a8 8 0 0 1 0 11.32l-32 32a8 8 0 0 1-11.32-11.32l32-32a8 8 0 0 1 11.32 0"></svg:path></svg:g>`,
})
export class PhWashingMachineDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
