import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primeWindowMaximizeIcon],svg[prime-window-maximize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 20.75h-6a.75.75 0 0 1 0-1.5h6A1.25 1.25 0 0 0 19.25 18V6A1.25 1.25 0 0 0 18 4.75H6A1.25 1.25 0 0 0 4.75 6v6a.75.75 0 0 1-1.5 0V6A2.75 2.75 0 0 1 6 3.25h12A2.75 2.75 0 0 1 20.75 6v12A2.75 2.75 0 0 1 18 20.75"></svg:path><svg:path fill="currentColor" d="M16 12.75a.76.76 0 0 1-.75-.75V8.75H12a.75.75 0 0 1 0-1.5h4a.76.76 0 0 1 .75.75v4a.76.76 0 0 1-.75.75"></svg:path><svg:path fill="currentColor" d="M11.5 13.25A.74.74 0 0 1 11 13a.75.75 0 0 1 0-1l4.5-4.5a.75.75 0 0 1 1.06 1.06L12 13a.74.74 0 0 1-.5.25M8 20.75H5A1.76 1.76 0 0 1 3.25 19v-3A1.76 1.76 0 0 1 5 14.25h3A1.76 1.76 0 0 1 9.75 16v3A1.76 1.76 0 0 1 8 20.75m-3-5a.25.25 0 0 0-.25.25v3a.25.25 0 0 0 .25.25h3a.25.25 0 0 0 .25-.25v-3a.25.25 0 0 0-.25-.25Z"></svg:path>`,
})
export class PrimeWindowMaximizeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
