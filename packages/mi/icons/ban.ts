import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[miBanIcon],svg[mi-ban-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.68 7.094A8 8 0 0 0 16.905 18.32zM7.094 5.68L18.32 16.906A8 8 0 0 0 7.094 5.68M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12"></svg:path>`,
})
export class MiBanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
