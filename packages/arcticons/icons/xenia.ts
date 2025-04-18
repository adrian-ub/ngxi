import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsXeniaIcon],svg[arcticons-xenia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 39.93a167 167 0 0 1 37 0M5.5 8.07a167 167 0 0 0 37 0M14.75 39.16V8.84m18.5.134v30.062"></svg:path>`,
})
export class ArcticonsXeniaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
