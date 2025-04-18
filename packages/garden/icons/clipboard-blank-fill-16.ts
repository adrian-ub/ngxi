import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenClipboardBlankFill16Icon],svg[garden-clipboard-blank-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 0C5.8 0 4 1.8 4 4v1h8V4c0-2.2-1.8-4-4-4m6 16H2c-.6 0-1-.4-1-1V3c0-.6.4-1 1-1h.5c.3 0 .5.2.5.5V5c0 .6.4 1 1 1h8c.6 0 1-.4 1-1V2.5c0-.3.2-.5.5-.5h.5c.6 0 1 .4 1 1v12c0 .6-.4 1-1 1"></svg:path>`,
})
export class GardenClipboardBlankFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
