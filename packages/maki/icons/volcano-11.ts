import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiVolcano11Icon],svg[maki-volcano-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M3 1l1.5 3h2L8 3V2L6 3V1h-.5L5 2.5L3.5 1H3zm.522 4L1.023 9.16c-.223.37.044.84.476.84h8c.432 0 .7-.47.477-.84L7.479 5H7v.5a.499.499 0 1 1-1 0a.5.5 0 0 0-1 0v2a.499.499 0 1 1-1 0V5h-.478z" fill="currentColor"></svg:path>`,
})
export class MakiVolcano11Icon {
  readonly viewBox = input("0 0 11 11")
  readonly width = input("1em")
  readonly height = input("1em")
}
