import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBunkBedIcon],svg[mdi-bunk-bed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 2v21h2v-2h18v2h2V7c0-2.21-1.79-4-4-4h-9v5H3V2m3.5 0A2.5 2.5 0 0 0 4 4.5A2.5 2.5 0 0 0 6.5 7A2.5 2.5 0 0 0 9 4.5A2.5 2.5 0 0 0 6.5 2M3 11h18v2.56c-.59-.35-1.27-.56-2-.56h-9v5H3m3.5-6A2.5 2.5 0 0 0 4 14.5A2.5 2.5 0 0 0 6.5 17A2.5 2.5 0 0 0 9 14.5A2.5 2.5 0 0 0 6.5 12"></svg:path>`,
})
export class MdiBunkBedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
