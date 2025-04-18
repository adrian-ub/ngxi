import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageHome4FillIcon],svg[mage-home-4-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.188 7.768a3 3 0 0 0-1.15-1.31l-6.47-4a3 3 0 0 0-3.15 0l-6.47 4a3 3 0 0 0-1.12 1.28a3 3 0 0 0-.23 1.7l1.67 10a3 3 0 0 0 1 1.79a2.92 2.92 0 0 0 1.93.69h2.54a.74.74 0 0 0 .75-.75v-3.65a.82.82 0 0 1 .81-.81h1.33a.84.84 0 0 1 .58.24a.8.8 0 0 1 .23.57v3.72a.76.76 0 0 0 .75.75h2.59a3 3 0 0 0 2.94-2.49l1.67-10a2.94 2.94 0 0 0-.2-1.73m-4.74 4.1h-8.86a1 1 0 1 1 0-2h8.9a1 1 0 0 1 0 2z"></svg:path>`,
})
export class MageHome4FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
