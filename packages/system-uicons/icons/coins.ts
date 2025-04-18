import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[systemUiconsCoinsIcon],svg[system-uicons-coins-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M18.5 11.5v3c0 1.3-3.134 3-7 3s-7-1.7-7-3V12"></svg:path><svg:path d="M4.794 12.259c.865 1.148 3.54 2.225 6.706 2.225c3.866 0 7-1.606 7-2.986c0-.775-.987-1.624-2.536-2.22"></svg:path><svg:path d="M15.5 6.5v3c0 1.3-3.134 3-7 3s-7-1.7-7-3v-3"></svg:path><svg:path d="M8.5 9.484c3.866 0 7-1.606 7-2.986S12.366 3.5 8.5 3.5s-7 1.617-7 2.998c0 1.38 3.134 2.986 7 2.986"></svg:path></svg:g>`,
})
export class SystemUiconsCoinsIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}
