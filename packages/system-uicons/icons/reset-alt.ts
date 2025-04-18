import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[systemUiconsResetAltIcon],svg[system-uicons-reset-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M14.5 3.5c2.414 1.377 4 4.022 4 7a8 8 0 1 1-8-8"></svg:path><svg:path d="M14.5 7.5v-4h4"></svg:path></svg:g>`,
})
export class SystemUiconsResetAltIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}
