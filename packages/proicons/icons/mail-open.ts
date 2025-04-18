import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsMailOpenIcon],svg[proicons-mail-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m20.59 8.949l-7.755 3.562a2 2 0 0 1-1.67 0L3.41 8.95m14.84 11.3H5.75a3 3 0 0 1-3-3v-7.215A2.5 2.5 0 0 1 3.93 7.91l7.014-4.36a2 2 0 0 1 2.112 0l7.014 4.36a2.5 2.5 0 0 1 1.18 2.124v7.215a3 3 0 0 1-3 3"></svg:path>`,
})
export class ProiconsMailOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
