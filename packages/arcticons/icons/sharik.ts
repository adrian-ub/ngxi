import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSharikIcon],svg[arcticons-sharik-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.56 33.25A18 18 0 0 1 33.27 8.57c-5.4 16.04-5.99 18.08-24.71 24.68m32.62-14.63c4.22 15.2-9.77 26.76-22.57 22.56C27 27.67 30 25.92 41.18 18.62"></svg:path>`,
})
export class ArcticonsSharikIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
