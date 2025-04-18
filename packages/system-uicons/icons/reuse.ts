import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[systemUiconsReuseIcon],svg[system-uicons-reuse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M3.5 2.5h5v5"></svg:path><svg:path d="M8.5 2.5q-5 4.255-5 8.5t3 7.5m11 0h-5v-5"></svg:path><svg:path d="M12.5 18.5q5-4.255 5-8.5t-3-7.5"></svg:path></svg:g>`,
})
export class SystemUiconsReuseIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}
