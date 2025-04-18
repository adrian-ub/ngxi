import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenClipboardListStroke12Icon],svg[garden-clipboard-list-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.5 2.5H2a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H8.5m-3 4h3m-3 2h3m-.052-5c.31-1.525-.894-3-2.45-3c-1.555 0-2.759 1.475-2.45 3z"></svg:path><svg:path fill="currentColor" d="M3 6h1v1H3zm0 2h1v1H3z"></svg:path>`,
})
export class GardenClipboardListStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
