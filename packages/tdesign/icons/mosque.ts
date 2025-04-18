import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignMosqueIcon],svg[tdesign-mosque-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.004 2.002l-.002 1.081A6.005 6.005 0 0 1 17.917 8H22v2h-1v12H3V10H2V8h4.083a6.005 6.005 0 0 1 4.919-4.917l.002-1.085zM8.126 8h7.748a4.002 4.002 0 0 0-7.748 0M5 10v10h3v-6h8v6h3V10zm9 10v-4h-4v4z"></svg:path>`,
})
export class TdesignMosqueIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
