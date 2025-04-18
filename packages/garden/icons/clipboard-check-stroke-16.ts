import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenClipboardCheckStroke16Icon],svg[garden-clipboard-check-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 2.5H2c-.28 0-.5.22-.5.5v12c0 .28.22.5.5.5h12c.28 0 .5-.22.5-.5V3c0-.28-.22-.5-.5-.5h-2.5m-6.5 8l2 2L11.5 8m-.05-3.5c.02-.16.05-.33.05-.5C11.5 2.07 9.93.5 8 .5S4.5 2.07 4.5 4c0 .17.03.34.05.5z"></svg:path>`,
})
export class GardenClipboardCheckStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
