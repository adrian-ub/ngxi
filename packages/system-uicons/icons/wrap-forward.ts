import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[systemUiconsWrapForwardIcon],svg[system-uicons-wrap-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m14.5 12.5l2.998-3.002l-3-3"></svg:path><svg:path d="M12.5 15.5h-5q-3 0-3-3c0-3 1-3 3-3h10"></svg:path></svg:g>`,
})
export class SystemUiconsWrapForwardIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}
