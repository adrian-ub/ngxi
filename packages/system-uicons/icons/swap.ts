import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[systemUiconsSwapIcon],svg[system-uicons-swap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13 8h5V3"></svg:path><svg:path d="M18 8q-4.255-5-8.5-5T2 6m4.5 5.5h-5v5"></svg:path><svg:path d="M1.5 11.5q4.255 5 8.5 5t7.5-3"></svg:path></svg:g>`,
})
export class SystemUiconsSwapIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}
