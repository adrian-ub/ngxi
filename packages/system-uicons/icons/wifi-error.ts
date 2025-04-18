import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[systemUiconsWifiErrorIcon],svg[system-uicons-wifi-error-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(3 4)"><svg:path d="M2.727 7.033A7.5 7.5 0 0 1 5.492 5.61m4.05-.005a7.5 7.5 0 0 1 2.785 1.43M7.5 8.5l.027-8M.286 4.667A11 11 0 0 1 5.511 2.18m4.087.02a11 11 0 0 1 5.116 2.467m-9.58 4.74q.242-.168.5-.298m3.706-.016q.275.135.533.314"></svg:path><svg:circle cx="7.5" cy="11.5" r="1" fill="currentColor"></svg:circle></svg:g>`,
})
export class SystemUiconsWifiErrorIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}
