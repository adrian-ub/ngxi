import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignForkIcon],svg[tdesign-fork-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21a2 2 0 1 0 0-4a2 2 0 0 0 0 4m1-5.874A4.002 4.002 0 0 1 12 23a4 4 0 0 1-1-7.874V13H7a3 3 0 0 1-3-3V8.874A4.002 4.002 0 0 1 5 1a4 4 0 0 1 1 7.874V10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V8.874A4.002 4.002 0 0 1 19 1a4 4 0 0 1 1 7.874V10a3 3 0 0 1-3 3h-4zM4.997 7h.006a2 2 0 1 0-.006 0M19 7a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class TdesignForkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
