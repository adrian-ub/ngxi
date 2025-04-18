import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPrinterFillIcon],svg[ph-printer-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 96v80a8 8 0 0 1-8 8h-32v32a8 8 0 0 1-8 8H64a8 8 0 0 1-8-8v-32H24a8 8 0 0 1-8-8V96c0-13.23 11.36-24 25.33-24H56V40a8 8 0 0 1 8-8h128a8 8 0 0 1 8 8v32h14.67C228.64 72 240 82.77 240 96M72 72h112V48H72Zm112 88H72v48h112Zm16-44a12 12 0 1 0-12 12a12 12 0 0 0 12-12"></svg:path>`,
})
export class PhPrinterFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
