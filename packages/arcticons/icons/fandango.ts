import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFandangoIcon],svg[arcticons-fandango-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m22.175 8.852l1.955 7.295l-8.337 2.234l1.954 7.295l8.338-2.234l1.955 7.295l-8.338 2.234l1.955 7.295"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m5.5 13.32l2.478 9.245a6.53 6.53 0 0 1 4.39 4.553a6.53 6.53 0 0 1-1.529 6.126l2.48 9.256l29.18-7.819l-2.536-9.469a6.53 6.53 0 0 1-4.33-4.329a6.53 6.53 0 0 1 1.585-5.914L34.68 5.5z"></svg:path>`,
})
export class ArcticonsFandangoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
