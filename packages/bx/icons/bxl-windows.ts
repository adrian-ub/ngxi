import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBxlWindowsIcon],svg[bx-bxl-windows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M3 5.557l7.357-1.002l.004 7.097l-7.354.042L3 5.557zm7.354 6.913l.006 7.103l-7.354-1.011v-6.14l7.348.048zm.892-8.046L21.001 3v8.562l-9.755.077V4.424zm9.758 8.113l-.003 8.523l-9.755-1.378l-.014-7.161l9.772.016z" fill="currentColor"></svg:path>`,
})
export class BxBxlWindowsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
