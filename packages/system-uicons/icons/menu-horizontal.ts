import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[systemUiconsMenuHorizontalIcon],svg[system-uicons-menu-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:circle cx="10.5" cy="10.5" r="1"></svg:circle><svg:circle cx="5.5" cy="10.5" r="1"></svg:circle><svg:circle cx="15.5" cy="10.5" r="1"></svg:circle></svg:g>`,
})
export class SystemUiconsMenuHorizontalIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}
