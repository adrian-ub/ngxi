import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiRadioHandheldIcon],svg[mdi-radio-handheld-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 2a1 1 0 0 0-1 1v17c0 1.11.89 2 2 2h5c1.11 0 2-.89 2-2V9c0-1.11-.89-2-2-2h-5V3a1 1 0 0 0-1-1m1 7h5v4h-5z"></svg:path>`,
})
export class MdiRadioHandheldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
