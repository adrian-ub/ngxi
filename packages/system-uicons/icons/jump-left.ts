import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[systemUiconsJumpLeftIcon],svg[system-uicons-jump-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M15.5 14.5v-2a3 3 0 0 0-3-3h-8"></svg:path><svg:path d="m7.5 12.5l-3.001-3l3.001-3"></svg:path></svg:g>`,
})
export class SystemUiconsJumpLeftIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}
