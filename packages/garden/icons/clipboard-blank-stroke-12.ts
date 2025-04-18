import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenClipboardBlankStroke12Icon],svg[garden-clipboard-blank-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4 1.5H2a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5V2a.5.5 0 0 0-.5-.5H8m.45 2c.31-1.525-.895-3-2.45-3s-2.76 1.475-2.45 3z"></svg:path>`,
})
export class GardenClipboardBlankStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
