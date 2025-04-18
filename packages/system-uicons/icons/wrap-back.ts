import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[systemUiconsWrapBackIcon],svg[system-uicons-wrap-back-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M6.499 6.498L3.5 9.5l3 3"></svg:path><svg:path d="M8.5 15.5h5q3 0 3-3c0-3-1-3-3-3h-10"></svg:path></svg:g>`,
})
export class SystemUiconsWrapBackIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}
