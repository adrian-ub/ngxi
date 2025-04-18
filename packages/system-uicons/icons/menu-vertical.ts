import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[systemUiconsMenuVerticalIcon],svg[system-uicons-menu-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:circle cx="10.5" cy="10.5" r="1"></svg:circle><svg:circle cx="10.5" cy="5.5" r="1"></svg:circle><svg:circle cx="10.5" cy="15.5" r="1"></svg:circle></svg:g>`,
})
export class SystemUiconsMenuVerticalIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}
