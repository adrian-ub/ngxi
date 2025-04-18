import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phHardDrivesThinIcon],svg[ph-hard-drives-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 140H48a12 12 0 0 0-12 12v48a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12v-48a12 12 0 0 0-12-12m4 60a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4v-48a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Zm-4-156H48a12 12 0 0 0-12 12v48a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12m4 60a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V56a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Zm-24 72a8 8 0 1 1-8-8a8 8 0 0 1 8 8m0-96a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhHardDrivesThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
