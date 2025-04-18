import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenClipboardCheckStroke12Icon],svg[garden-clipboard-check-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4 1.5H2c-.28 0-.5.22-.5.5v9c0 .28.22.5.5.5h8c.28 0 .5-.22.5-.5V2c0-.28-.22-.5-.5-.5H8m-4.5 6L5 9l3.5-3.5m-.05-2A2.5 2.5 0 1 0 3.5 3c0 .17.02.34.05.5z"></svg:path>`,
})
export class GardenClipboardCheckStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
