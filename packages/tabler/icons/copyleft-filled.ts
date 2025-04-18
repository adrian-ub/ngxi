import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCopyleftFilledIcon],svg[tabler-copyleft-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 3.34a10 10 0 1 1-14.995 8.984L2 12l.005-.324A10 10 0 0 1 17 3.34m-2.117 5.889a4.016 4.016 0 0 0-5.543-.23a1 1 0 0 0 1.32 1.502a2.016 2.016 0 0 1 2.783.116a1.993 1.993 0 0 1 0 2.766a2.016 2.016 0 0 1-2.783.116A1 1 0 0 0 9.34 15a4.016 4.016 0 0 0 5.543-.23a3.993 3.993 0 0 0 0-5.542z"></svg:path>`,
})
export class TablerCopyleftFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
