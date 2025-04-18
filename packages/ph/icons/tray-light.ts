import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTrayLightIcon],svg[ph-tray-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 34H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14M48 46h160a2 2 0 0 1 2 2v106h-30.69a13.94 13.94 0 0 0-9.9 4.1l-19.31 19.31a2 2 0 0 1-1.41.59h-41.38a2 2 0 0 1-1.41-.58L86.59 158.1a13.94 13.94 0 0 0-9.9-4.1H46V48a2 2 0 0 1 2-2m160 164H48a2 2 0 0 1-2-2v-42h30.69a2 2 0 0 1 1.41.58l19.31 19.32a13.94 13.94 0 0 0 9.9 4.1h41.38a13.94 13.94 0 0 0 9.9-4.1l19.31-19.31a2 2 0 0 1 1.41-.59H210v42a2 2 0 0 1-2 2"></svg:path>`,
})
export class PhTrayLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
