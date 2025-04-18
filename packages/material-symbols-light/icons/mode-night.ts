import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightModeNightIcon],svg[material-symbols-light-mode-night-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 3q1.868 0 3.51.709t2.858 1.922t1.923 2.857t.709 3.509t-.709 3.51q-.708 1.643-1.923 2.859t-2.858 1.925T9 21q-.789 0-1.54-.135q-.752-.136-1.46-.446q1.902-1.561 2.951-3.756T10 12T8.951 7.337T6 3.58q.708-.31 1.46-.445Q8.21 3 9 3"></svg:path>`,
})
export class MaterialSymbolsLightModeNightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
