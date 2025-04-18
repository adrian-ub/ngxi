import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenClipboardListFill12Icon],svg[garden-clipboard-list-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 0C4.9 0 4 .9 4 2v1h4V2c0-1.1-.9-2-2-2m4 1h-.5c-.28 0-.5.22-.5.5V3c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1V1.5c0-.28-.22-.5-.5-.5H2c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h8c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1M4 9H3V8h1zm0-2H3V6h1zm4.5 2h-3c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h3c.28 0 .5.22.5.5s-.22.5-.5.5m0-2h-3c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h3c.28 0 .5.22.5.5s-.22.5-.5.5"></svg:path>`,
})
export class GardenClipboardListFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
