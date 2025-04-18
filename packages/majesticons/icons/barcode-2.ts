import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsBarcode2Icon],svg[majesticons-barcode-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 6v12m7-12v12m7-12v12M10 6.5v11a.5.5 0 0 0 1 0v-11a.5.5 0 0 0-1 0m7 0v11a.5.5 0 0 0 1 0v-11a.5.5 0 0 0-1 0M3.5 6a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5v0a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5"></svg:path>`,
})
export class MajesticonsBarcode2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
