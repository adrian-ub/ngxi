import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[systemUiconsJumpForwardIcon],svg[system-uicons-jump-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M3.5 14.5v-2a3 3 0 0 1 3-3h8"></svg:path><svg:path d="m11.499 12.5l3.001-3l-3.001-3"></svg:path><svg:path d="m14.499 12.5l3.001-3l-3.001-3"></svg:path></svg:g>`,
})
export class SystemUiconsJumpForwardIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}
