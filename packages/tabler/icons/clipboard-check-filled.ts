import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerClipboardCheckFilledIcon],svg[tabler-clipboard-check-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.997 4.17A3 3 0 0 1 20 7v12a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 2.003-2.83A4 4 0 0 0 10 8h4a4 4 0 0 0 3.98-3.597zm-3.704 7.123L11 14.585l-1.293-1.292a1 1 0 1 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414M14 2a2 2 0 1 1 0 4h-4a2 2 0 1 1 0-4z"></svg:path>`,
})
export class TablerClipboardCheckFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
